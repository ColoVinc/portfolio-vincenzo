import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="abdelrahman.qassem@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+2 01000 66 24 55" Image={BsPhone} />
      <SingleInfo text="Alexandria, Egypt" Image={IoLocationOutline} />
    </div>
  );
}

export default ContactInfo