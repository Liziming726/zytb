import React from "react";
import { Table, Divider } from "antd";

const columns = [
  {
    title: "院校名称",
    dataIndex: "name",
  },
  {
    title: "24年招生计划",
    dataIndex: "plan",
  },
  {
    title: "较23年变化",
    dataIndex: "change",
  },
  {
    title: "23年投档线",
    dataIndex: "score",
  },
];
// 通信工程
const data1 = [
  {
    key: "1",
    name: "临沂大学",
    plan: 60,
    change: 0,
    score: 317,
  },
  {
    key: "2",
    name: "青岛工学院",
    plan: 50,
    change: -10,
    score: 237,
  },
  {
    key: "3",
    name: "泰山科技学院",
    plan: 100,
    change: 0,
    score: 222,
  },
];
//软件工程技术（高职本科）
const data2 = [
  {
    key: "2",
    name: "山东外国语职业技术大学",
    plan: 90,
    change: 20,
    score: 238,
  },
  {
    key: "1",
    name: "山东工程职业技术大学",
    plan: 80,
    change: -20,
    score: 223,
  },

  {
    key: "3",
    name: "山东外事职业大学",
    plan: 100,
    change: -10,
    score: 218,
  },
];
//软件工程
const data3 = [
  {
    key: "2",
    name: "潍坊科技学院",
    plan: 50,
    change: 0,
    score: 285,
  },
  {
    key: "3",
    name: "烟台科技学院",
    plan: 50,
    change: -50,
    score: 279,
  },
  {
    key: "4",
    name: "山东华宇工学院",
    plan: 45,
    change: -5,
    score: 270,
  },
  {
    key: "5",
    name: "山东协和学院",
    plan: 40,
    change: 0,
    score: 261,
  },
  {
    key: "6",
    name: "齐鲁理工学院",
    plan: 80,
    change: -20,
    score: 250,
  },
  {
    key: "7",
    name: "青岛工学院",
    plan: 55,
    change: 5,
    score: 240,
  },
  {
    key: "8",
    name: "青岛恒星科技学院",
    plan: 80,
    change: -25,
    score: 229,
  },
  {
    key: "9",
    name: "烟台南山学院",
    plan: 75,
    change: "暂无",
    score: "暂无",
  },
];
//计算机科学与技术
const data4 = [
  {
    key: "1",
    name: "临沂大学",
    plan: 130,
    change: 0,
    score: 317,
  },
  {
    key: "2",
    name: "泰山学院",
    plan: 180,
    change: 140,
    score: 314,
  },
  {
    key: "6",
    name: "山东女子学院",
    plan: 100,
    change: 10,
    score: 303,
  },
  {
    key: "3",
    name: "济宁学院",
    plan: 140,
    change: -10,
    score: 303,
  },

  {
    key: "5",
    name: "枣庄学院",
    plan: 130,
    change: 40,
    score: 300,
  },
  {
    key: "17",
    name: "山东石油化工学院",
    plan: 60,
    change: -10,
    score: 296,
  },
  {
    key: "16",
    name: "山东财经大学燕山学院",
    plan: 150,
    change: 0,
    score: 289,
  },
  {
    key: "13",
    name: "聊城大学东昌学院",
    plan: 80,
    change: 0,
    score: 287,
  },
  {
    key: "20",
    name: "青岛农业大学海都学院",
    plan: 90,
    change: -40,
    score: 286,
  },
  {
    key: "8",
    name: "潍坊科技学院",
    plan: 220,
    change: 20,
    score: 283,
  },
  {
    key: "15",
    name: "潍坊理工学院",
    plan: 100,
    change: -50,
    score: 276,
  },
  {
    key: "22",
    name: "烟台科技学院",
    plan: 80,
    change: "暂无",
    score: "暂无",
  },
  {
    key: "7",
    name: "烟台南山学院",
    plan: 150,
    change: 0,
    score: 269,
  },
  {
    key: "12",
    name: "烟台理工学院",
    plan: 150,
    change: 0,
    score: 269,
  },
  {
    key: "14",
    name: "青岛城市学院",
    plan: 160,
    change: 0,
    score: 262,
  },
  {
    key: "11",
    name: "山东协和学院",
    plan: 80,
    change: -20,
    score: 261,
  },
  {
    key: "10",
    name: "青岛黄海学院",
    plan: 150,
    change: 0,
    score: 251,
  },
  {
    key: "4",
    name: "青岛滨海学院",
    plan: 160,
    change: -40,
    score: 246,
  },
  {
    key: "21",
    name: "齐鲁理工学院",
    plan: 300,
    change: 0,
    score: 243,
  },
  {
    key: "19",
    name: "青岛工学院",
    plan: 55,
    change: -45,
    score: 242,
  },
  {
    key: "9",
    name: "山东英才学院",
    plan: 50,
    change: 0,
    score: 231,
  },
  {
    key: "18",
    name: "泰山科技学院",
    plan: 300,
    change: 0,
    score: 221,
  },

  {
    key: "23",
    name: "齐鲁师范学院",
    plan: 40,
    change: "暂无",
    score: "暂无",
  },
];
//计算机应用工程（高职本科）
const data5 = [
  {
    key: "1",
    name: "山东外事职业大学",
    plan: 200,
    change: -10,
    score: 211,
  },
];
//网络工程
const data6 = [
  {
    key: "28",
    name: "烟台科技学院",
    plan: 50,
    change: -30,
    score: 276,
  },
  {
    key: "24",
    name: "山东华宇工学院",
    plan: 130,
    change: 30,
    score: 265,
  },
  {
    key: "26",
    name: "青岛工学院",
    plan: 55,
    change: 5,
    score: 234,
  },
  {
    key: "27",
    name: "山东协和学院",
    plan: 50,
    change: 0,
    score: 258,
  },
  {
    key: "25",
    name: "青岛恒星科技学院",
    plan: 120,
    change: 20,
    score: 225,
  },
];
//电子信息工程技术（高职本科）
const data7 = [
  {
    key: "1",
    name: "山东工程职业技术大学",
    plan: 105,
    change: -5,
    score: 219,
  },
];
//现代通信工程（高职本科）
const data8 = [
  {
    key: "1",
    name: "山东工程职业技术大学",
    plan: 145,
    change: -5,
    score: 212,
  },
];
//物联网工程技术（高职本科）
const data9 = [
  {
    key: "1",
    name: "山东工程职业技术大学",
    plan: 105,
    change: -5,
    score: 216,
  },
];
//物联网工程
const data10 = [
  {
    key: "40",
    name: "德州学院",
    plan: 40,
    change: "暂无",
    score: "暂无",
  },
  {
    key: "39",
    name: "枣庄学院",
    plan: 40,
    change: -50,
    score: 297,
  },
  {
    key: "29",
    name: "山东农业工程学院",
    plan: 180,
    change: 30,
    score: 295,
  },
  {
    key: "38",
    name: "潍坊科技学院",
    plan: 50,
    change: -10,
    score: 285,
  },
  {
    key: "30",
    name: "烟台科技学院",
    plan: 50,
    change: 0,
    score: 277,
  },

  {
    key: "36",
    name: "烟台理工学院",
    plan: 60,
    change: -20,
    score: 268,
  },

  {
    key: "32",
    name: "山东华宇工学院",
    plan: 40,
    change: -10,
    score: 267,
  },
  {
    key: "34",
    name: "潍坊理工学院",
    plan: 40,
    change: "暂无",
    score: "暂无",
  },
  {
    key: "35",
    name: "青岛城市学院",
    plan: 40,
    change: -20,
    score: 261,
  },
  {
    key: "37",
    name: "山东协和学院",
    plan: 40,
    change: -10,
    score: 256,
  },
  {
    key: "31",
    name: "青岛工学院",
    plan: 40,
    change: -10,
    score: 234,
  },

  {
    key: "33",
    name: "泰山科技学院",
    plan: 40,
    change: -10,
    score: 230,
  },
];
//智能制造工程
const data11 = [
  {
    key: "3",
    name: "烟台科技学院",
    plan: 30,
    change: "暂无",
    score: "暂无",
  },
  {
    key: "2",
    name: "山东华宇工学院",
    plan: 30,
    change: -20,
    score: 264,
  },
  {
    key: "1",
    name: "青岛恒星科技学院",
    plan: 30,
    change: -10,
    score: 225,
  },
];
//数据科学与大数据技术
const data12 = [
  {
    key: "42",
    name: "青岛农业大学海都学院",
    plan: 30,
    change: 0,
    score: 285,
  },
  {
    key: "41",
    name: "山东财经大学东方学院",
    plan: 55,
    change: "暂无",
    score: "暂无",
  },
  {
    key: "44",
    name: "潍坊理工学院",
    plan: 50,
    change: -50,
    score: 271,
  },
  {
    key: "47",
    name: "青岛滨海学院",
    plan: 30,
    change: "暂无",
    score: "暂无",
  },
  {
    key: "45",
    name: "青岛黄海学院",
    plan: 100,
    change: -50,
    score: 243,
  },
  {
    key: "46",
    name: "山东英才学院",
    plan: 50,
    change: 0,
    score: 225,
  },

  {
    key: "43",
    name: "泰山科技学院",
    plan: 50,
    change: 0,
    score: 223,
  },
];
//数字媒体技术（高职本科）
const data13 = [
  {
    key: "1",
    name: "山东外国语职业技术大学",
    plan: 65,
    change: -5,
    score: 228,
  },
];
//数字媒体技术
const data14 = [
  {
    key: "1",
    name: "山东女子学院",
    plan: 140,
    change: 60,
    score: 298,
  },
  {
    key: "2",
    name: "山东协和学院",
    plan: 40,
    change: -10,
    score: 256,
  },
  {
    key: "3",
    name: "青岛工学院",
    plan: 40,
    change: -60,
    score: 229,
  },
];
//大数据工程技术（高职本科）
const data15 = [
  {
    key: "1",
    name: "山东工程职业技术大学",
    plan: 100,
    change: -10,
    score: 214,
  },
  {
    key: "2",
    name: "山东外事职业大学",
    plan: 100,
    change: 0,
    score: 211,
  },
];
//信息安全
const data16 = [
  {
    key: "1",
    name: "青岛工学院",
    plan: 95,
    change: -5,
    score: 230,
  },
];
//人工智能
const data17 = [
  {
    key: "1",
    name: "青岛恒星科技学院",
    plan: 85,
    change: -5,
    score: 222,
  },
];
const Cont = () => {
  return (
    <>
      <Divider>计算机科学与技术 [080901]</Divider>
      <Table columns={columns} dataSource={data4} size="middle" />

      <Divider>软件工程 [080902]</Divider>
      <Table columns={columns} dataSource={data3} size="middle" />

      <Divider>物联网工程 [080905]</Divider>
      <Table columns={columns} dataSource={data10} size="middle" />

      <Divider>网络工程 [080903]</Divider>
      <Table columns={columns} dataSource={data6} size="middle" />

      <Divider>软件工程技术（高职本科） [310203]</Divider>
      <Table columns={columns} dataSource={data2} size="middle" />

      <Divider>电子信息工程技术（高职本科） [310101]</Divider>
      <Table columns={columns} dataSource={data7} size="middle" />

      <Divider>现代通信工程（高职本科） [310301]</Divider>
      <Table columns={columns} dataSource={data8} size="middle" />

      <Divider>现代通信工程（高职本科） [310302]</Divider>
      <Table columns={columns} dataSource={data9} size="middle" />

      <Divider>智能制造工程 [080213T]</Divider>
      <Table columns={columns} dataSource={data11} size="middle" />

      <Divider>大数据工程技术（高职本科） [310205]</Divider>
      <Table columns={columns} dataSource={data15} size="middle" />

      <Divider>信息安全 [080904K]</Divider>
      <Table columns={columns} dataSource={data16} size="middle" />

      <Divider>人工智能 [080717T]</Divider>
      <Table columns={columns} dataSource={data17} size="middle" />

      <Divider>通信工程 [080703]</Divider>
      <Table columns={columns} dataSource={data1} size="middle" />

      <Divider>计算机应用工程（高职本科） [310201]</Divider>
      <Table columns={columns} dataSource={data5} size="middle" />

      <Divider>数据科学与大数据技术 [080910T]</Divider>
      <Table columns={columns} dataSource={data12} size="middle" />

      <Divider>数字媒体技术（高职本科） [310204]</Divider>
      <Table columns={columns} dataSource={data13} size="middle" />

      <Divider>数字媒体技术 [080906]</Divider>
      <Table columns={columns} dataSource={data14} size="middle" />
    </>
  );
};

export default Cont;
