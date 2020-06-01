import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ICSettings(props: React.SVGProps<SVGSVGElement>) {
    const {fill}  = props;
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path fill={fill ||"#fff"} d="M464 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zm16 464c0 8.837-7.163 16-16 16H48c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v416z" />
      <Path fill={fill ||"#fff"}  d="M288 128h-16V80h-32v48h-16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16h16v208h32V224h16c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16zM416 304h-16V80h-32v224h-16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16h16v32h32v-32h16c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16zM160 256h-16V80h-32v176H96c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16h16v80h32v-80h16c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16z" />
    </Svg>
  )
}

export default ICSettings
