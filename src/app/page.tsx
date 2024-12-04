'use client'
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const correctPassword = '12072024';

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setStep(2); 
    } else {
      alert('ผิดอ่าาา เสียใจหว่ะะะ 😭');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-300 p-5">
    {step === 1 && (
    <div className="flex flex-col items-center text-center space-y-10">
      <h1 className="text-3xl font-bold text-white">ใส่วันที่เราเจอกันวันเเรก</h1>
      <input
        type="password"
        placeholder="วัน/เดือน/ปี (DDMMYYYY)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <button
        onClick={handlePasswordSubmit}
        className="px-6 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
      >
        ยืนยัน
      </button>
    </div>
  )}

      {step === 2 && (
        <div className="text-center space-y-5">
          <h1 className="text-3xl font-bold text-white">เซอร์ไพรส์!</h1>
          <img
            src="gift.png"
            alt="Gift Box"
            className="mx-auto w-48 h-48 animate-bounce"
            onClick={() => setStep(3)} 
          />
        </div>
      )}

      {step === 3 && (
        <div className="relative flex items-center justify-center w-1/2 h-1/2">
          <div className="absolute inset-0 bg-heart bg-cover bg-center animate-heart-effect"></div>
          <video
            autoPlay
            controls
            className="rounded-lg shadow-lg w-3/4"
            onEnded={() => setStep(4)}
          >
            <source src="/final.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {step === 4 && (
  <div className="text-center space-y-5">
    <h1 className="text-3xl font-bold text-white">เลือกของขวัญได้อย่างนึง</h1>
    <div className="flex flex-wrap justify-center gap-4 py-6">
      <img
        src="gift.png"
        alt="Gift Box"
        className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 animate-bounce"
        onClick={() => setStep(5)} 
      />
      <img
        src="gift.png"
        alt="Gift Box"
        className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 animate-bounce"
        onClick={() => setStep(6)} 
      />
      <img
        src="gift.png"
        alt="Gift Box"
        className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 animate-bounce"
        onClick={() => setStep(7)} 
      />
      <img
        src="gift.png"
        alt="Gift Box"
        className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 animate-bounce"
        onClick={() => setStep(8)} 
      />
    </div>
  </div>
    )}
    {
      step===5 &&(
       <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-lg shadow-lg text-center space-y-5">
  <h1 className="text-4xl font-bold text-white">เม่งเตง</h1>
  <img
    src="/meng.PNG"
    alt="meng"
    className="w-48 h-48 mx-auto rounded-xl border-4 border-white shadow-lg"
  />
  <div className="text-white space-y-2">
    <h2 className="text-lg font-semibold">ด้วยเม่งของเตงสะท้อนแสงจ้า</h2>
    <h2 className="text-lg font-semibold">ทำให้เตงสามารถขออะไรเค้าก็ได้หนึ่งข้อ</h2>
  </div>
</div>

      )
    }
    {
      step===6 &&(
       <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-lg shadow-lg text-center space-y-5">
  <h1 className="text-4xl font-bold text-white">โบ้เบ่</h1>
  <img
    src="/empty.JPG"
    alt="empty"
    className="w-48 h-48 mx-auto rounded-xl border-4 border-white shadow-lg"
  />
  <div className="text-white space-y-2">
    <h2 className="text-lg font-semibold">เปิดมาก็ว่างเปล่า</h2>
    <h2 className="text-lg font-semibold">อดได้อะไรเลย ว้าย~~~</h2>
  </div>
</div>

      )
    }
     {
      step===7 &&(
       <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-lg shadow-lg text-center space-y-5">
  <h1 className="text-4xl font-bold text-white">กระกร้าเเสนอร่อย</h1>
  <img
    src="/food.JPG"
    alt="food"
    className="w-48 h-48 mx-auto rounded-xl border-4 border-white shadow-lg"
  />
  <div className="text-white space-y-2">
    <h2 className="text-lg font-semibold">ตระกร้าที่มีเเต่ของกินแสนอร่อย</h2>
    <h2 className="text-lg font-semibold">เค้าจาเลี้ยงเตงอารายก็ด้ายที่เตงอยากกิน</h2>
  </div>
</div>

      )
    }
     {
      step===8 &&(
       <div className="bg-gradient-to-r from-gray-400 to-black p-8 rounded-lg shadow-lg text-center space-y-5">
  <h1 className="text-4xl font-bold text-white">เค้าเองงง</h1>
  <img
    src="/me.JPG"
    alt="me"
    className="w-48 h-48 mx-auto rounded-xl border-4 border-white shadow-lg"
  />
  <div className="text-white space-y-2">
    <h2 className="text-lg font-semibold">เค้าเองจ้าาาา 😂😂</h2>
    <h2 className="text-lg font-semibold">เตงจาทำอารายกะเค้ากะด้ายเค้ายอมหมดเลย</h2>
  </div>
</div>

      )
    }



    </div>
  );
};

export default Home;
