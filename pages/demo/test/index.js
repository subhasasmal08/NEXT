import { useRouter } from 'next/router'
import React from 'react'

export default function index() {
    const router = useRouter()
  return (
    <div onClick={() => router.push("/demo/16")}>test index</div>
  )
}
