"use client";
import React, { useState } from "react";

type FormDataType = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function page() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    if (!formData.name.trim()) {
      alert("กรุณากรอกชื่อ");
      return;
    }
    if (!formData.phone.trim()) {
      alert("กรุณากรอกเบอร์โทร");
      return;
    }
    if (!formData.email.trim()) {
      alert("กรุณากรอกอีเมล");
      return;
    }
    if (!formData.message.trim()) {
      alert("กรุณากรอกข้อความ");
      return;
    }
    alert(
      `ข้อมูลที่ส่ง:\nชื่อ: ${formData.name}\nเบอร์: ${formData.phone}\nอีเมล: ${formData.email}\nข้อความ: ${formData.message}`
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className='lg:pt-30 px-3 pt-20 xl:mx-10 mx-1 mb-10'>
      <div className='p-6 flex flex-col '>
        <p className='text-4xl lg:text-5xl text-[#249CFF] font-bold text-center'>ติดต่อเรา</p>
      </div>
      <div className='flex flex-col gap-10'>
        <div className='grid grid-rows-1 lg:grid-cols-2 lg:gap-8 gap-15 border-2 bg-white border-[#FFFFFF] rounded-lg shadow-[4px_4px_10px_#DBEFFF] lg:pt-4 lg:py-8 lg:px-6 p-4'>
          <iframe
            className='shadow-[10px_10px_10px_#DBEFFF] rounded-lg xl:h-[500px] lg:h-[400px] h-[250px] w-full'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30610.148049842708!2d102.7997867!3d16.4619363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228a8be6071c63%3A0x3a331f084b28abd4!2sKhon%20Kaen%20University%20Science%20Park!5e0!3m2!1sen!2sth!4v1745911176574!5m2!1sen!2sth"
            style={{ border: 0 }}
            allowFullScreen={false}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy">
          </iframe>

          <div className='flex flex-col xl:gap-6 gap-3 justify-center border border-[#CAE5FB] rounded-2xl xl:px-5 p-4 text-[10px] sm:text-sm lg:text-base'>
            <div className='flex gap-4'>
              <svg className='h-[18px] w-[18px] md:h-5 md:w-5 lg:w-6 lg:h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5.733 2.043c1.217-1.21 3.221-.995 4.24.367l1.262 1.684c.83 1.108.756 2.656-.229 3.635l-.238.238a.65.65 0 0 0-.008.306c.063.408.404 1.272 1.832 2.692s2.298 1.76 2.712 1.824a.7.7 0 0 0 .315-.009l.408-.406c.876-.87 2.22-1.033 3.304-.444l1.91 1.04c1.637.888 2.05 3.112.71 4.445l-1.421 1.412c-.448.445-1.05.816-1.784.885c-1.81.169-6.027-.047-10.46-4.454c-4.137-4.114-4.931-7.702-5.032-9.47l.749-.042l-.749.042c-.05-.894.372-1.65.91-2.184zm3.04 1.266c-.507-.677-1.451-.731-1.983-.202l-1.57 1.56c-.33.328-.488.69-.468 1.036c.08 1.405.72 4.642 4.592 8.492c4.062 4.038 7.813 4.159 9.263 4.023c.296-.027.59-.181.865-.454l1.42-1.413c.578-.574.451-1.62-.367-2.064l-1.91-1.039c-.528-.286-1.146-.192-1.53.19l-.455.453l-.53-.532c.53.532.529.533.528.533l-.001.002l-.003.003l-.007.006l-.015.014a1 1 0 0 1-.136.106c-.08.053-.186.112-.319.161c-.27.101-.628.155-1.07.087c-.867-.133-2.016-.724-3.543-2.242c-1.526-1.518-2.122-2.66-2.256-3.526c-.069-.442-.014-.8.088-1.07a1.5 1.5 0 0 1 .238-.42l.032-.035l.014-.015l.006-.006l.003-.003l.002-.002l.53.53l-.53-.531l.288-.285c.428-.427.488-1.134.085-1.673z" clipRule="evenodd"></path></svg>

              <p>062-916-9989</p>
            </div>
            <div className='flex gap-4'>

              <svg className="h-[18px] w-[18px] md:h-5 md:w-5 lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"></path></svg>

              <p>contact@datadorf.co.th</p>
            </div>
            <div className='flex gap-4'>

              <svg className='h-[18px] w-[18px] md:h-5 md:w-5 lg:w-6 lg:h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M3.338 17A10 10 0 0 0 12 22a10 10 0 0 0 8.662-5M3.338 7A10 10 0 0 1 12 2a10 10 0 0 1 8.662 5"></path><path d="M13 21.95s1.408-1.853 2.295-4.95M13 2.05S14.408 3.902 15.295 7M11 21.95S9.592 20.098 8.705 17M11 2.05S9.592 3.902 8.705 7M9 10l1.5 5l1.5-5l1.5 5l1.5-5M1 10l1.5 5L4 10l1.5 5L7 10m10 0l1.5 5l1.5-5l1.5 5l1.5-5"></path></g></svg>

              <p>www.datadorf.co.th</p>
            </div>
            <div className='flex gap-4'>

              <svg className='h-5 w-5 md:h-5 md:w-5 lg:w-6 lg:h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="currentColor"><path fillRule="evenodd" d="M10 8.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clipRule="evenodd"></path><path fillRule="evenodd" d="M5.5 6.286C5.5 8.959 8.153 13.5 10 13.5c1.848 0 4.5-4.541 4.5-7.214C14.5 3.65 12.493 1.5 10 1.5S5.5 3.65 5.5 6.286m8 0c0 2.193-2.348 6.214-3.5 6.214c-1.151 0-3.5-4.02-3.5-6.214C6.5 4.187 8.075 2.5 10 2.5s3.5 1.687 3.5 3.786" clipRule="evenodd"></path><path d="M13.435 9.14a.5.5 0 0 1 .369-.929a3 3 0 0 1 1.74 1.84l1.334 4A3 3 0 0 1 14.03 18H5.97a3 3 0 0 1-2.846-3.949l1.333-4A3 3 0 0 1 6.24 8.194a.5.5 0 1 1 .355.935a2 2 0 0 0-1.19 1.239l-1.333 4A2 2 0 0 0 5.97 17h8.062a2 2 0 0 0 1.897-2.633l-1.332-4a2 2 0 0 0-1.16-1.226"></path></g></svg>

              <p>555/268 หมู่ที่ 1 ตำบลบ้านทุ่ม อำเภอเมืองขอนแก่น จ.ขอนแก่น 40000</p>
            </div>
            <div className='flex gap-4'>
              <svg className='h-[18px] w-[18px] md:h-5 md:w-5 lg:w-6 lg:h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36 "><path fill="currentColor" d="M31 8h-8v2h8v21h-8v2h10V10a2 2 0 0 0-2-2" className="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M19.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h18V5.12A2.12 2.12 0 0 0 19.88 3M20 31h-3v-3H9v3H6V5.12A.12.12 0 0 1 6.12 5h13.76a.12.12 0 0 1 .12.12Z" className="clr-i-outline clr-i-outline-path-2"></path><path fill="currentColor" d="M8 8h2v2H8z" className="clr-i-outline clr-i-outline-path-3"></path><path fill="currentColor" d="M12 8h2v2h-2z" className="clr-i-outline clr-i-outline-path-4"></path><path fill="currentColor" d="M16 8h2v2h-2z" className="clr-i-outline clr-i-outline-path-5"></path><path fill="currentColor" d="M8 13h2v2H8z" className="clr-i-outline clr-i-outline-path-6"></path><path fill="currentColor" d="M12 13h2v2h-2z" className="clr-i-outline clr-i-outline-path-7"></path><path fill="currentColor" d="M16 13h2v2h-2z" className="clr-i-outline clr-i-outline-path-8"></path><path fill="currentColor" d="M8 18h2v2H8z" className="clr-i-outline clr-i-outline-path-9"></path><path fill="currentColor" d="M12 18h2v2h-2z" className="clr-i-outline clr-i-outline-path-10"></path><path fill="currentColor" d="M16 18h2v2h-2z" className="clr-i-outline clr-i-outline-path-11"></path><path fill="currentColor" d="M8 23h2v2H8z" className="clr-i-outline clr-i-outline-path-12"></path><path fill="currentColor" d="M12 23h2v2h-2z" className="clr-i-outline clr-i-outline-path-13"></path><path fill="currentColor" d="M16 23h2v2h-2z" className="clr-i-outline clr-i-outline-path-14"></path><path fill="currentColor" d="M23 13h2v2h-2z" className="clr-i-outline clr-i-outline-path-15"></path><path fill="currentColor" d="M27 13h2v2h-2z" className="clr-i-outline clr-i-outline-path-16"></path><path fill="currentColor" d="M23 18h2v2h-2z" className="clr-i-outline clr-i-outline-path-17"></path><path fill="currentColor" d="M27 18h2v2h-2z" className="clr-i-outline clr-i-outline-path-18"></path><path fill="currentColor" d="M23 23h2v2h-2z" className="clr-i-outline clr-i-outline-path-19"></path><path fill="currentColor" d="M27 23h2v2h-2z" className="clr-i-outline clr-i-outline-path-20"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
              <p>555/268 หมู่ที่ 1 ตำบลบ้านทุ่ม อำเภอเมืองขอนแก่น จ.ขอนแก่น 40000
                อาคารอำนวยการอุทยานวิทยาศาสตร์ภูมิภาค ภาคตะวันออกเฉียงเหนือ 1 (จังหวัดขอนแก่น) เลขที่ 123 หมู่ที่ 16 ถนนกัลปพฤกษ์ ตำบลในเมือง อำเภอเมือง จังหวัดขอนแก่น 40002</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col border-2 bg-white border-[#FFFFFF] rounded-lg shadow-[4px_4px_10px_#DBEFFF] lg:py-8 lg:px-15 p-4">
            <div className="grid grid-rows-1 lg:grid-cols-2 lg:gap-8 gap-8 ">
              <div className="flex flex-col gap-4">
                <p className="text-black font-light text-xl md:text-2xl">
                  ส่งข้อความหาเรา
                </p>
                <input
                  placeholder="Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className=" flex flex-col border border-[#CAE5FB] rounded-2xl xl:px-5 p-4 text-[10px] sm:text-sm lg:text-base gap-4 placeholder:text-[#a5a5a5] focus:outline-[#6BB5F2] "
                  type="text"
                />
                <input
                  placeholder="Phone Number*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex flex-col border border-[#CAE5FB] rounded-2xl xl:px-5 p-4 text-[10px] sm:text-sm lg:text-base gap-4 placeholder:text-[#a5a5a5] focus:outline-[#6BB5F2]"
                  type="text"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="flex flex-col border border-[#CAE5FB] rounded-2xl xl:px-5 p-4 text-[10px] sm:text-sm lg:text-base gap-4 placeholder:text-[#a5a5a5] focus:outline-[#6BB5F2]"
                  type="email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="message*"
                  className="flex flex-col border border-[#CAE5FB] rounded-2xl xl:px-5 p-4 text-[10px] sm:text-sm lg:text-base gap-4 min-h-80 resize-y w-full placeholder:text-[#a5a5a5] focus:outline-[#6BB5F2]"
                />
              </div>
            </div>
            <div className="flex justify-center items-center my-10">
              <button
                type="submit"
                className="text-white p-4 bg-[#6BB5F2] rounded-full shadow-xl hover:cursor-pointer hover:scale-105 transition-all"
              >
                ส่งข้อความ
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
