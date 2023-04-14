import { useRouter } from 'next/router'
import React from 'react'

export default function demodynamic() {
    const router = useRouter()
    const demoid = router.query.demodynamic
  return (
    <div>
        demodynamic {demoid}</div>
  )
}
