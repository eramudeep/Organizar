import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ICPlus(props: React.SVGProps<SVGSVGElement>) {
  const {fill}  = props;
  return (
    <Svg viewBox="0 0 52 52" {...props}>
      <Path fill={fill ||"#fff"} d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
      <Path fill={fill ||"#fff"} d="M38.5 25H27V14a1 1 0 10-2 0v11H13.5a1 1 0 100 2H25v12a1 1 0 102 0V27h11.5a1 1 0 100-2z" />
    </Svg>
  )
}

export default ICPlus
