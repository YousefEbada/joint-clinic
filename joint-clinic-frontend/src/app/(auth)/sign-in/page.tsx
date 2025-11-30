"use client";
import CorneredBoxes from '@/components/atoms/CorneredBoxes'
import PaginationDots from '@/components/atoms/paginationlog'
import Logo from '@/components/icons/Logo'
import HelloCard from '@/components/organisms/helloCard'
import "./style.css"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const page = () => {
  const [activeN, setActiveN] = React.useState(false);
  const [activeC, setActiveC] = React.useState(false);
  const [activeIdentifier, setActiveIdentifier] = React.useState(false);
  const [activeMarital, setActiveMarital] = React.useState(false);
  const [activeLanguage, setActiveLanguage] = React.useState(false);

  return (
    <main
      className="h-screen py-[300px] bg-cover bg-center my-auto flex items-center justify-start overflow-y-auto"
      style={{ backgroundImage: "url('./loginbg.png')" }}
    >
      {/* <div className="w-full h-full flex items-center justify-start pl-[6%]">
        <HelloCard />
      </div> */}
      <div className="w-full h-full flex items-center mt-[37%] justify-center">
        {/* <HelloCard /> */}
        <CorneredBoxes type="glass" className="w-[80vw] min-h-[100vh] mb-[5%] mx-o" >
          <Logo fill="#112a4d" className="w-[150px] h-[150px] absolute top-[10px] right-[40px]" />
          <div className='my-[10%] flex flex-col justify-center items-center'>
            <PaginationDots total={4} initial={0} className="mb-[30px]" />
            {/* <div className="page1">
              <h2 className="text-[42px] font-bold mt-0 bg-gradient-to-b from-[#0D294D] to-[#1E5598] bg-clip-text text-transparent tracking-wide text-center">Looks like you’re new here!</h2>
              <p className="text-center bg-gradient-to-b from-[#0D294D] to-[#1E5598] bg-clip-text text-transparent tracking-wide text-center my-[10px] font-medium text-[20px] leading-relaxed">
                Let’s get you started. Please enter your phone number or email.
              </p>
              <div className="inputs flex flex-row gap-[30px]">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-[450px] h-[80px] text-[24px] px-5 rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition"
                />

                
                <input
                  type="date"
                  className="w-[380px] text-[24px] text-center h-[80px] px-5 rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition"
                />

                
                <div className="relative">
                  <FontAwesomeIcon icon={faCaretDown} className="absolute top-[50%] translate-y-[-50%] right-[20px] w-[10px]" />
                  <select
                    className="custom-select w-[300px] text-[24px] relative h-[80px] px-5 rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition appearance-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                </div>
              </div>
            </div> */}
            {/* <div className="page2 flex flex-col justify-center items-center gap-[0px]">
              <h2 className="text-[42px] font-bold mt-0 bg-gradient-to-b from-[#0D294D] to-[#1E5598] bg-clip-text text-transparent tracking-wide text-center">Perfect,</h2>
              <p className="text-center bg-gradient-to-b mt-[14px] mb-[50px] from-[#0D294D] to-[#1E5598] bg-clip-text text-transparent tracking-wide text-center my-[10px] font-medium text-[20px] leading-relaxed">
                now we’ll send you a code to verify your phone/email. Please enter the code when it arrives
              </p>
              <input
                  type="text"
                  placeholder="Verification Code"
                  className="w-[460px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition"
                />
                <a href="#" className="text-[24px] text-[#1E5598] font-medium underline mt-2">Resend code</a>
            </div> */}
            <div className="page3">
              <h2 className="text-[42px] font-bold mt-0 bg-gradient-to-b from-[#0D294D] to-[#1E5598] bg-clip-text text-transparent tracking-wide text-center">Personal Information,</h2>
              <p className="text-center bg-gradient-to-b mt-[14px] mb-[50px] from-[#0D294D] to-[#1E5598] bg-clip-text text-transparent tracking-wide text-center my-[10px] font-medium text-[20px] leading-relaxed">
                We need more details about you.
              </p>

              <form action="" className='flex flex-row gap-[30px] flex-wrap justify-center items-center'>

                <input type="email" placeholder="Email Address" className="w-[580px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition" />

                <input type="text" placeholder="NID or Iqama ID" className="w-[350px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition" />

                <div className="relative">
                  <FontAwesomeIcon icon={faCaretDown} size="xl" className="absolute top-[50%] translate-y-[-50%] right-[50px]" />
                  <select name="nationality" id="nationality"
                    className={`custom-select w-[305px] text-[24px] relative h-[80px] px-5 rounded-full border border-[#0D294D] bg-transparent text-[${activeN ? '#0D294D' : '#7b8a99'}] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition appearance-none`}
                    onChange={() => setActiveN(true)}
                  >
                    <option value="" disabled selected className="text-[#7b8a99]">Nationality</option>
                    <option value="">Egypt</option>
                    <option value="">Saudi Arabia</option>
                    <option value="">UAE</option>
                    <option value="">Qatar</option>
                    <option value="">Oman</option>
                    <option value="">Bahrain</option>
                    <option value="">Kuwait</option>
                  </select>
                </div>

                <div className="relative">
                  <FontAwesomeIcon icon={faCaretDown} size="xl" className="absolute top-[50%] translate-y-[-50%] right-[50px]" />
                  <select name="city" id="city"
                    className={`custom-select w-[275px] text-[24px] relative h-[80px] px-5 rounded-full border border-[#0D294D] bg-transparent text-[${activeC ? '#0D294D' : '#7b8a99'}] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition appearance-none`}
                    onChange={() => setActiveC(true)}
                  >
                    <option value="" disabled selected className="text-[#7b8a99]">City</option>
                    <option value="">Cairo</option>
                    <option value="">Alexandria</option>
                    <option value="">Giza</option>
                    <option value="">Shubra El-Kheima</option>
                    <option value="">Port Said</option>
                    <option value="">Zagazig</option>
                  </select>
                </div>

                <input type="text" placeholder="Address" className="w-[1000px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition" />

                <div className="relative">
                  <FontAwesomeIcon icon={faCaretDown} size="xl" className="absolute top-[50%] translate-y-[-50%] right-[170px]" />
                  <select name="Identifiertype" id="Identifiertype"
                    className={`custom-select w-[560px] text-[24px] relative h-[80px] px-5 rounded-full border border-[#0D294D] bg-transparent text-[${activeIdentifier ? '#0D294D' : '#7b8a99'}] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition appearance-none`}
                    onChange={() => setActiveIdentifier(true)}
                  >
                    <option value="" disabled selected className="text-[#7b8a99]">Identifier type</option>
                    <option value="">NID</option>
                    <option value="">Iqama ID</option>
                    <option value="">Passport</option>
                  </select>
                </div>

                <div className="relative">
                  <FontAwesomeIcon icon={faCaretDown} size="xl" className="absolute top-[50%] translate-y-[-50%] right-[50px]" />
                  <select name="MaritalStatus" id="MaritalStatus"
                    className={`custom-select w-[310px] text-[24px] relative h-[80px] px-5 rounded-full border border-[#0D294D] bg-transparent text-[${activeMarital ? '#0D294D' : '#7b8a99'}] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition appearance-none`}
                    onChange={() => setActiveMarital(true)}
                  >
                    <option value="" disabled selected className="text-[#7b8a99]">Marital Status</option>
                    <option value="">Single</option>
                    <option value="">Married</option>
                    <option value="">Divorced</option>
                    <option value="">Widowed</option>
                  </select>
                </div>

                <div className="relative">
                  <FontAwesomeIcon icon={faCaretDown} size="xl" className="absolute top-[50%] translate-y-[-50%] right-[50px]" />
                  <select name="Speaking Language" id="Speaking Language"
                    className={`custom-select w-[370px] text-[24px] relative h-[80px] px-5 rounded-full border border-[#0D294D] bg-transparent text-[${activeLanguage ? '#0D294D' : '#7b8a99'}] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition appearance-none`}
                    onChange={() => setActiveLanguage(true)}
                  >
                    <option value="" disabled selected className="text-[#7b8a99]">Speaking Language</option>
                    <option value="">English</option>
                    <option value="">Arabic</option>
                    <option value="">French</option>
                    <option value="">Spanish</option>
                  </select>
                </div>
              </form>
              <div className="part2 flex flex-col items-center justify-center">
                <h2 className="text-[42px] font-bold mt-0 bg-gradient-to-b mt-[60px] from-[#0D294D] to-[#1E5598] bg-clip-text text-transparent tracking-wide text-center">Guardian Information,</h2>
                <p className="text-center w-[60%]  mt-[14px] mb-[50px] bg-gradient-to-b from-[#0D294D] to-[#1E5598] bg-clip-text text-transparent tracking-wide text-center my-[10px] font-medium text-[20px] leading-relaxed">
                  The guardian will be taking decision on patient’ behalf in  case that the patient is a minor or
                  can’t make decisions due to medical conditions.
                </p>
                <form action="" className='flex flex-row gap-[30px] flex-wrap justify-center items-center'>
                  <input type="text" placeholder="Guardian’s Full Name" className="w-[750px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition" />
                  <input type="text" placeholder="Guardian’s Phone Number" className="w-[540px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition" />
                  <input type="text" placeholder="Guardian’s NID or Iqama ID" className="w-[570px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition" />
                  <input type="email" placeholder="Guardian’s Email Address" className="w-[720px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition" />
                  <input type="text" placeholder="Blood Group" className="w-[440px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition" />
                  <input type="text" placeholder="Patient Category" className="w-[450px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition" />
                  <input type="file" placeholder="Upload File" className="w-[370px] h-[80px] px-5 text-[24px] rounded-full border border-[#0D294D] bg-transparent text-[#0D294D] placeholder:text-[#7b8a99] border-dashed text-center outline-none focus:ring-2 focus:ring-[#1E5598]/30 transition" />
                </form>
              </div>

            </div>
            <div className="btns mt-[40px] flex flex-row gap-[30px]">
              <button className="w-[220px] h-[60px] cursor-pointer py-3 bg-transparent border-[4px] border-[#fff] text-[#fff] rounded-full font-semibold mt-4 hover:bg-[#fff] hover:text-[#ea392f] transition-all duration-300">Back</button>
              <button className="w-[220px] h-[60px] cursor-pointer py-3 bg-[#ea392f] text-white border-[4px] border-[#ea392f] rounded-full font-semibold mt-4 hover:bg-transparent hover:text-[#ea392f] hover:border-[#ea392f] transition-all duration-300">Continue</button>
            </div>
          </div>
        </CorneredBoxes>
      </div>
    </main>
  )
}

export default page