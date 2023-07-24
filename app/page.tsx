'use client';
import { useEffect, useState } from 'react';
import { getUser } from './(hooks)/routeGuard';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { Button, Modal, Select } from 'antd';
import type { SelectProps } from 'antd';

const Main = styled.div``;

const BtnContainer = styled.div`
  background: black;
  padding: 1.5rem;
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
  const [files, setFiles] = useState<SelectProps['options']>([]);
  const [selected, setSelect] = useState('');
  const [dic, setDic] = useState<{ [key: string]: string }>();
  const [modifyKey, setModifyKey] = useState('');
  const [newItem, setNewItem] = useState<{ key: string; [filename: string]: string }>({
    key: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [zhList, setZhList] = useState([]);

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

  const saveDic = async (type: string) => {
    const resp = await fetch(`/api/lang/${selected}`, {
      method: 'POST',
      body: JSON.stringify(dic),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (resp) {
      if (type == 'temp') {
        alert('暫存成功');
      } else {
        alert('saved');
      }
    }
  };

  const deleteKey = async (key: any) => {
    const isConfirmed = window.confirm('確定要刪除嗎？');
    if (!isConfirmed) {
      return;
    }

    // Send API request to delete the specified key's data
    const resp = await fetch(`/api/lang/${selected}`, {
      method: 'DELETE',
      body: JSON.stringify({ key: key }), // 將要刪除的 key 作為請求的內容
    }).catch((err) => console.error(err));

    if (resp) {
      alert('deleted');

      // Filter out the deleted key from the state
      const updatedDic = { ...dic };
      delete updatedDic[key];
      setDic(updatedDic);

      // Filter out the deleted key from zhList state if it exists
      const updatedZhList = { ...zhList };
      if (updatedZhList.hasOwnProperty(key)) {
        delete updatedZhList[key];
        setZhList(updatedZhList);
      }

      // Save the changes immediately after successful delete
      saveDic('temp');
    } else {
      alert('Failed to delete');
    }
  };

  // const options: SelectProps["options"] = [];

  useEffect(() => {
    async function init() {
      const files = await fetch('/api/lang', { method: 'GET' })
        .then((res) => res.json())
        .catch((err) => console.error(err));
      console.log(files);
      if (files) {
        const arr: SelectProps['options'] = [];
        files.forEach((i: any) => {
          arr.push({ label: i, value: i });
        });
        console.log(`==arr==`, arr);
        setFiles(arr);
      }
    }

    if (!getUser()) {
      router.replace('login');
    } else {
      init();
    }
  }, [router]);

  return (
    <Main>
      <BtnContainer>
        <Button onClick={() => saveDic('')} ghost>
          Save
        </Button>
      </BtnContainer>

      <br />
      <div></div>
      {/* <InputContainer>
        <InputGroup>
          <Label>Key: </Label>
          <input value={newItem.key} onChange={(event) => setNewItem((pre) => ({ ...pre, key: event.target.value }))} placeholder="請輸入key" />
        </InputGroup>
        <InputGroup>
          <Label>Value: </Label>
          <input value={newItem.value} onChange={(event) => setNewItem((pre) => ({ ...pre, value: event.target.value }))} />
        </InputGroup>

        <Button
          onClick={() => {
            if ((dic as any)[newItem.key] !== undefined) {
              alert('duplicate');
              return;
            }
            setDic((pre) => ({ ...pre, [newItem.key]: newItem.value }));
            setNewItem({ key: '', value: '' });
          }}
        >
          新增Key
        </Button>
      </InputContainer> */}
      <InputGroup>
          <Label>Key: </Label>
          <input value={newItem.key} onChange={(event) => setNewItem((pre) => ({ ...pre, key: event.target.value }))} placeholder="請輸入key" />
        </InputGroup>
      <Button
        onClick={async () => {
          const res = await fetch(`/api/query/${newItem.key}`).then(res => res.json());
          if (res) {
            setNewItem(pre => ({...pre, ...res}));
            setShowModal(true);
          }
        }}
      >
        新增字典檔
      </Button>

      <InputContainer>
        <Select
          // value={selected}
          // placeholder="please select"
          style={{ width: '15rem' }}
          onChange={getDic}
          options={files}
        ></Select>
      </InputContainer>
      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th width={'20%'}>Key</Th>
              <Th width={'40%'}>Value</Th>
              <Th width={'20%'}>Options</Th>
              <Th width={'20%'}>中文參考</Th>
            </tr>
          </Thead>
          <Tbody>
            {dic &&
              Object.keys(dic).map((key) => (
                <tr key={key}>
                  <Td>{key}</Td>
                  {/* <Td style={{ background: "#FFF0AC" }}> */}
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
                            setModifyKey('');
                          }}
                          style={{
                            marginRight: '.5rem',
                            borderColor: 'green',
                            color: 'green',
                          }}
                          size={'small'}
                        >
                          儲存
                        </Button>
                        <Button
                          onClick={() => {
                            setModifyKey('');
                          }}
                          size={'small'}
                        >
                          取消
                        </Button>
                      </ButtonGroupsContainer>
                    )}
                    {modifyKey !== key && (
                      <ButtonGroupsContainer>
                        <Button type="primary" onClick={() => setModifyKey(key)} style={{ marginRight: '.5rem' }} ghost size={'small'}>
                          修改
                        </Button>
                        <Button danger onClick={() => deleteKey(key)} size={'small'}>
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
        title="New Key and Values"
        open={showModal}
        onOk={async () => {
          const res = await fetch('/api/create', {method: 'POST', body: JSON.stringify(newItem)});
          if (res) {
            setNewItem({key: ''});
            alert('saved all');
            setShowModal(false);
          } else {
            alert('Error');
          }
        }}
        onCancel={() => {
          setShowModal(false);
        }}
      >
        <>
          <InputGroup>
            <Label>Key: </Label>
            <input value={newItem.key} readOnly placeholder="請輸入key" />
          </InputGroup>
          {(files ?? []).map((opt) => (
            <InputGroup>
              <Label>{opt.label}: </Label>
              <input
                value={newItem[opt.label as string]}
                onChange={(event) => setNewItem((pre) => ({ ...pre, [opt.label as string]: event.target.value }))}
                placeholder="請輸入key"
              />
            </InputGroup>
          ))}
        </>
      </Modal>
    </Main>
  );
}
