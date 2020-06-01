import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ICAll(props: React.SVGProps<SVGSVGElement>) {
    const{fill}= props;
  return (
    <Svg viewBox="0 0 480 480" {...props}>
      <Path fill={fill|| "#fff"}  d="M415.928 88a8 8 0 00-2.272-5.656l-80-80A7.896 7.896 0 00328 .072V0H88C74.745 0 64 10.745 64 24v432c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24V88h-.072zM336 27.312L388.688 80H344a8 8 0 01-8-8V27.312zM400 456a8 8 0 01-8 8H88a8 8 0 01-8-8V24a8 8 0 018-8h232v56c0 13.255 10.745 24 24 24h56v360z" />
      <Path  fill={fill|| "#fff"} d="M144 216c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 32a8 8 0 110-16 8 8 0 010 16zM200 232h160v16H200zM144 136c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 32a8 8 0 110-16 8 8 0 010 16zM200 152h160v16H200zM144 296c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 32a8 8 0 110-16 8 8 0 010 16zM200 312h160v16H200zM144 376c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 32a8 8 0 110-16 8 8 0 010 16zM200 392h160v16H200z" />
    </Svg>
  )
}

export default ICAll
