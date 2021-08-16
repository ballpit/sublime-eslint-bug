import React from 'react'


export interface Props {
  chainId: number | undefined
  customButton?: any
  animate?: boolean
}

export const Button = ({
  chainId,
  customButton,
  animate,
}: Props) => {
  return (
    <Button
      chainId={chainId}
      customButton={customButton}
      animate={animate}
    />
  )
}
