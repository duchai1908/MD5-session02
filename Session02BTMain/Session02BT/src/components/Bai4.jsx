import React from 'react'

export default function Bai4() {
    const course = ["HTML","Javascript","Python","C#"];
  return (
    <div>
        <h2>Bai4</h2>
        <h3>Danh sach khoa hoc</h3>
        <ul>
            {
            course.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
            }
        </ul>
    </div>
  )
}
