import { Bar } from "@ant-design/plots";
import React from "react";

export default function Antv() {
  const events = [
    { name: "临沂大学", 最高分: 317, 最低分: 316.9 },

    { name: "泰山学院", 最高分: 314, 最低分: 313.9 },

    { name: "济宁学院", 最高分: 303, 最低分: 302.9 },

    { name: "山东女子学院", 最高分: 303, 最低分: 298 },

    { name: "德州学院-新增", 最高分: 300, 最低分: 299.9 },

    { name: "枣庄学院", 最高分: 300, 最低分: 297 },

    { name: "山东石油化工学院", 最高分: 296, 最低分: 295.9 },

    { name: "山东农业工程学院", 最高分: 295, 最低分: 294.9 },

    { name: "山东财经大学燕山学院", 最高分: 289, 最低分: 288.9 },

    { name: "聊城大学东昌学院", 最高分: 287, 最低分: 286.9 },

    { name: "青岛农业大学海都学院", 最高分: 286, 最低分: 285 },

    { name: "潍坊科技学院", 最高分: 285, 最低分: 283 },

    { name: "烟台科技学院", 最高分: 279, 最低分: 276 },

    { name: "潍坊理工学院", 最高分: 276, 最低分: 271 },

    { name: "山东华宇工学院", 最高分: 270, 最低分: 264 },

    { name: "烟台理工学院", 最高分: 269, 最低分: 268 },

    { name: "青岛城市学院", 最高分: 262, 最低分: 261 },

    { name: "山东协和学院", 最高分: 261, 最低分: 256 },

    { name: "齐鲁理工学院", 最高分: 250, 最低分: 243 },

    { name: "青岛黄海学院", 最高分: 251, 最低分: 243 },

    { name: "青岛滨海学院", 最高分: 246, 最低分: 245.9 },

    { name: "青岛工学院", 最高分: 242, 最低分: 229 },

    { name: "山东外国语职业技术大学", 最高分: 238, 最低分: 228 },

    { name: "山东英才学院", 最高分: 231, 最低分: 225 },

    { name: "泰山科技学院", 最高分: 230, 最低分: 221 },

    { name: "青岛恒星科技学院", 最高分: 229, 最低分: 222 },

    { name: "山东工程职业技术大学", 最高分: 223, 最低分: 212 },

    { name: "山东外事职业大学", 最高分: 218, 最低分: 211 },

    { name: "新增-烟台南山学院", 最高分: 200, 最低分: 200 },

    { name: "新增-齐鲁师范学院", 最高分: 200, 最低分: 200 },

    { name: "新增-山东财经大学东方学院", 最高分: 200, 最低分: 200 },
  ];

  const config = {
    data: events,
    xField: "name",
    yField: ["最低分", "最高分"],
    colorField: "name",
    height: 700,
    width: 1600,
  };
  return (
    <div>
      <h1>各学校招收专业汇总</h1>
      <Bar {...config} />
    </div>
  );
}
