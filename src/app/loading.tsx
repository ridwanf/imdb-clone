import Image from 'next/image';
import React from 'react'

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image className="h-96" src="spinner.svg" alt="loading..." width={500} height={300}/>
    </div>
  );
}
