import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ICAddMore(props: React.SVGProps<SVGSVGElement>) {
    const{fill}= props;
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path fill={fill|| "#fff"}  d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" />
    </Svg>
  )
}

export default ICAddMore
