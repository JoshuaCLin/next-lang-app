"use client";
import { useEffect, useState } from "react";
import { getUser } from "./(hooks)/routeGuard";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Button, Modal, Select, Input } from "antd";
import type { SelectProps } from "antd";
import path from "path";
const Main = styled.div``;

const BtnContainer = styled.div`
  background: black;
  padding: 0.5rem;
`;

const InputContainer = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
  display: flex;
`;

const InputGroup = styled.div`
  margin-right: 1rem;

  > input {
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;

const PopInfoGroup = styled.div`
  display: flex;
  margin: 0.75rem auto;
`;

const PopInfoTitle = styled.div`
  width: 3rem;
  font-weight: 700;
  font-size: 0.85rem;
`;

const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 0.25rem;
`;

const TableContainer = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
  width: 100%;
  /* height: 70vh;
  overflow-y: scroll; */
`;
const Table = styled.table`
  border: 1px solid grey;
  width: 75%;
`;

const Thead = styled.thead`
  width: 100%;
  border-bottom: 1px solid grey;
`;

const Th = styled.th<{ width: string }>`
  padding: 0.75rem 0;
  width: ${(props) => props.width};
  border-inline-end: 1px solid #000;
  border-bottom: 1px solid #000;
  background: #cccccc;
  &:nth-child(4) {
    border-inline-end: none;
  }
`;

const Tbody = styled.tbody`
  border-top: 1px solid grey;
`;

const Td = styled.td`
  padding: 0.5rem 0;
  text-align: center;
  border-inline-end: 1px solid #000;
  border-bottom: 1px solid #000;
  &:nth-child(4) {
    border-inline-end: none;
  }
  > input {
    padding: 0.25rem;
  }
`;

const ButtonGroupsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  const router = useRouter();
  const [files, setFiles] = useState<SelectProps["options"]>([]);
  const [selected, setSelect] = useState("zh");
  const [dic, setDic] = useState<{ [key: string]: string }>();
  const [modifyKey, setModifyKey] = useState("");
  const [newItem, setNewItem] = useState<{
    key: string;
    [filename: string]: string;
  }>({
    key: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showAddJsonModal, setShowAddJsonModal] = useState(false);
  const [showDelJsonModal, setShowDelJsonModal] = useState(false);
  const [newJsonName, setNewJsonName] = useState("");
  const [newLangContent, setNewLangContent] = useState("");
  const [zhList, setZhList] = useState({});
  const [showPopKey, setShowPopKey] = useState(false);
  // const { TextArea } = Input;
  const getDic = async (value: string) => {
    const dic = await fetch(`/api/lang/${value}`)
      .then((res) => res.json())
      .catch((err) => console.error(err));

    if (dic) {
      setDic(dic);
      setSelect(value);
    }

    const zhDic = await fetch(`/api/lang/zh`)
      .then((res) => res.json())
      .catch((err) => console.error(err));
    setZhList(zhDic);
  };

  const saveDic = async () => {
    const resp = await fetch(`/api/lang/${selected}`, {
      method: "POST",
      body: JSON.stringify(dic),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (resp) {
      alert("saved");
    }
  };

  const deleteKey = async (key: any) => {
    const isConfirmed = window.confirm("確定要刪除嗎？");
    if (!isConfirmed) {
      return;
    }

    // remove first
    delete (dic as any)[key];

    const resp = await fetch(`/api/lang/${selected}`, {
      method: "POST",
      body: JSON.stringify(dic),
    }).catch((err) => console.error(err));

    if (resp) {
      setDic({ ...dic });
    } else {
      alert("Failed to delete");
    }
  };

  const keySearchHandler = async () => {
    setShowPopKey(true);
    if (newItem.key.trim() === "") {
      alert("請輸入有效 Key 值");
      return;
    }
    const startsWithNumber = /^[0-9]/.test(newItem.key.trim());
    if (startsWithNumber) {
      alert("Key 值不能以數字開頭");
      return;
    }
    const res = await fetch(`/api/query/${newItem.key.trim()}`).then((res) =>
      res.json()
    );
    if (res) {
      setNewItem((pre) => ({ ...pre, ...res }));
      setShowModal(true);
    }
  };

  // 在clickSearch()中
  const clickSearch = async (name: string) => {
    setShowPopKey(false);

    newItem.key = name;

    const res = await fetch(`/api/query/${newItem.key.trim()}`).then((res) =>
      res.json()
    );
    if (res) {
      setNewItem((pre) => ({ ...pre, ...res }));
      setShowModal(true);
    }

    setShowModal(true);
  };

  const addNewJsonHandler = async () => {
    setShowAddJsonModal((prev) => !prev);
    console.log("新增語系");
  };

  const deleteJsonHandler = async () => {
    setShowDelJsonModal(true);
  };

  const addNewLangJson = async () => {
    const containsSpecialChars = /[^A-Za-z0-9_]/.test(newJsonName.trim());
    const containsSpaces = /\s/.test(newJsonName.trim());

    if (containsSpecialChars || containsSpaces) {
      setNewJsonName("");
      alert("語系及檔名只能包含字母、數字和底線，不能包含特殊符號和空白");
      return;
    }

    const zhData = await fetch(`/api/lang/zh`).then((res) => res.json());

    const newJson = await fetch(`/api/lang/${newJsonName.trim()}`, {
      method: "POST",
      body: JSON.stringify(zhData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("新增的是 --->", newJson);

    getFiles();

    console.log(newJsonName);
    setShowAddJsonModal((prev) => !prev);
  };

  const deleteLangJson = async () => {
    console.log('POST recover')
  }

  const getFiles = async () => {
    const files = await fetch("/api/lang", { method: "GET" })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    console.log("files ---->", files);
    if (files) {
      const arr: SelectProps["options"] = [];
      files.forEach((i: any) => {
        arr.push({ label: i, value: i });
      });
      setFiles(arr);
    }
  };

  useEffect(() => {
    async function init() {
      const files = await fetch("/api/lang", { method: "GET" })
        .then((res) => res.json())
        .catch((err) => console.error(err));
      files.sort().reverse();
      if (files[0] !== "zh") {
        const index = files.indexOf("zh");
        files.unshift(files.splice(index, 1)[0]);
      }
      console.log("files ---->", files);
      if (files) {
        const arr: SelectProps["options"] = [];
        files.forEach((i: any) => {
          arr.push({ label: i, value: i });
        });

        setFiles(arr);
        setSelect("zh");
        getDic("zh");
      }
    }

    if (!getUser()) {
      router.replace("login");
    } else {
      init();
    }
  }, [router]);

  useEffect(() => {
    console.log(`=====newLang==========`, newLangContent);
  }, [newLangContent]);

  // if (dic) {
  //   console.log(Object.keys(dic));
  // }
  return (
    <Main>
      <BtnContainer>
        {/* <Button onClick={() => saveDic()} ghost>
          Save
        </Button> */}

        <Button onClick={addNewJsonHandler} style={{ margin: "1.5rem" }} ghost>
          新增語系檔
        </Button>

        <Button
          onClick={deleteJsonHandler}
          style={{ margin: "1.5rem" }}
          ghost
          danger
        >
          刪除語系檔
        </Button>
      </BtnContainer>

      <br />

      <InputGroup>
        <Label style={{ margin: "1.5rem" }}>Key: </Label>
        <input
          value={newItem.key}
          onChange={(event) =>
            setNewItem((pre) => ({ ...pre, key: event.target.value }))
          }
          placeholder="請輸入key"
        />
      </InputGroup>
      <Button onClick={keySearchHandler} style={{ margin: "1.5rem" }}>
        新增 Key & Value
      </Button>
      <InputContainer>
        <Select
          value={selected}
          style={{ width: "15rem" }}
          onChange={getDic}
          options={files}
        ></Select>
      </InputContainer>
      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th width={"20%"}>Key</Th>
              <Th width={"40%"}>Value</Th>
              <Th width={"20%"}>Options</Th>
              <Th width={"20%"}>zh參考</Th>
            </tr>
          </Thead>
          <Tbody>
            {dic &&
              Object.keys(dic)
                .sort()
                .map((key) => (
                  <tr key={key}>
                    <Td onClick={() => clickSearch(key)}>{key}</Td>
                    <Td>
                      {modifyKey === key && (
                        <input
                          value={(dic as any)[key]}
                          onChange={(event) => {
                            setDic({ ...dic, [key]: event.target.value });
                          }}
                        />
                      )}
                      {modifyKey !== key && (dic as any)[key]}
                    </Td>
                    <Td>
                      {key === modifyKey && (
                        <ButtonGroupsContainer>
                          <Button
                            onClick={() => {
                              setModifyKey("");
                              saveDic();
                            }}
                            style={{
                              marginRight: ".5rem",
                              borderColor: "green",
                              color: "green",
                            }}
                            size={"small"}
                          >
                            儲存
                          </Button>
                          <Button
                            onClick={() => {
                              setModifyKey("");
                            }}
                            size={"small"}
                          >
                            取消
                          </Button>
                        </ButtonGroupsContainer>
                      )}
                      {modifyKey !== key && (
                        <ButtonGroupsContainer>
                          <Button
                            type="primary"
                            onClick={() => setModifyKey(key)}
                            style={{ marginRight: ".5rem" }}
                            ghost
                            size={"small"}
                          >
                            修改
                          </Button>
                          <Button
                            danger
                            onClick={() => deleteKey(key)}
                            size={"small"}
                          >
                            刪除
                          </Button>
                        </ButtonGroupsContainer>
                      )}
                    </Td>
                    <Td>{(zhList as any)[key]}</Td>
                  </tr>
                ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal
        title={showPopKey ? "Add 新增" : "Edit 編輯"}
        open={showModal}
        onOk={async () => {
          const res = await fetch("/api/create", {
            method: "POST",
            body: JSON.stringify(newItem),
          });
          if (res) {
            setNewItem({ key: "" });
            alert("saved all");
            getDic(selected);
            setShowModal(false);
          } else {
            alert("Error");
          }
        }}
        onCancel={() => {
          setShowModal(false);
        }}
      >
        <>
          <InputGroup>
            <Label>Key: </Label>
            <input value={newItem.key} placeholder="請輸入key" />
          </InputGroup>
          {(files ?? []).map((opt, index) => (
            <InputGroup key={index}>
              <PopInfoGroup>
                <PopInfoTitle>{opt.label}</PopInfoTitle>
                <input
                  value={newItem[opt.label as string]}
                  onChange={(event) =>
                    setNewItem((pre) => ({
                      ...pre,
                      [opt.label as string]: event.target.value,
                    }))
                  }
                  placeholder="請輸入 value"
                />
              </PopInfoGroup>
            </InputGroup>
          ))}
        </>
      </Modal>
      <Modal
        title={"新增語系"}
        width={800}
        open={showAddJsonModal}
        onCancel={() => {
          setShowAddJsonModal(false);
        }}
        onOk={addNewLangJson}
      >
        <InputGroup>
          <Label>語系：</Label>
          <input
            value={newJsonName}
            onChange={(event) => setNewJsonName(event.target.value)}
            placeholder="請輸入語系及檔名"
          />
        </InputGroup>
      </Modal>
      <Modal
        title={"刪除語系"}
        width={800}
        open={showDelJsonModal}
        onCancel={() => {
          setShowDelJsonModal(false);
        }}
        onOk={() => {
          deleteLangJson()
          setShowDelJsonModal(false);
        }}
      >
        <InputGroup>
          <Label>語系：</Label>
          <input
            value={newJsonName}
            onChange={(event) => setNewJsonName(event.target.value)}
            placeholder="請輸入語系及檔名"
          />
        </InputGroup>
      </Modal>
    </Main>
  );
}
