import type { FC } from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
  onClick?: () => void
}

export const LogoutIcon: FC<Props> = props => {
  return (
    <svg x="0" y="0" width={20} height={20} viewBox="0 0 320.002 320.002" xmlSpace="preserve" {...props}>
      <g>
        <path d="M51.213 175.001h173.785c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15H51.213l19.394-19.394c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0L4.396 149.393c-.351.351-.683.719-.997 1.103-.137.167-.256.344-.385.515-.165.22-.335.435-.488.664-.14.209-.261.426-.389.64-.123.206-.252.407-.365.619-.118.22-.217.446-.323.67-.104.219-.213.435-.306.659-.09.219-.164.442-.243.664-.087.24-.179.477-.253.722-.067.222-.116.447-.172.672-.063.249-.133.497-.183.751-.051.259-.082.521-.119.782-.032.223-.075.443-.097.669a15.09 15.09 0 00-.074 1.457l-.001.022.001.022c.001.487.026.973.074 1.458.022.223.064.44.095.661.038.264.069.528.121.79.05.252.119.496.182.743.057.227.107.456.175.681.073.241.164.474.248.71.081.226.155.453.247.675.091.22.198.431.3.646.108.229.21.46.33.685.11.205.235.4.354.599.131.221.256.444.4.659.146.219.309.424.466.635.136.181.262.368.407.544.299.364.616.713.947 1.048.016.016.029.034.045.05l45 45.001A14.956 14.956 0 0060 220.003a14.96 14.96 0 0010.606-4.393c5.858-5.858 5.858-15.355.001-21.213l-19.394-19.396z"></path>
        <path d="M305.002 25h-190c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15s15-6.716 15-15V55h160v210.001h-160V220c0-8.284-6.716-15-15-15s-15 6.716-15 15v60.001c0 8.284 6.716 15 15 15h190c8.284 0 15-6.716 15-15V40c0-8.284-6.716-15-15-15z"></path>
      </g>
    </svg>
  )
}
