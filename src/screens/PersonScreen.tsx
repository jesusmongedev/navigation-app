import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { StackProps } from '../models/StackNavigator';

// interface RouteParams {
//   id: number,
//   name: string,
//   lastName: string,
//   age: number,
//   skills: string[]
// }

export default function PersonScreen({ route: {params}, navigation: {setOptions} }: StackProps) {

  //* Fast way to get TS autocompletion
  // const params = route.params as RouteParams

  useEffect(() => {
    setOptions({
      //* < ! > removes null and undefined from the type of an expression
      // title: params!.name
      title: params.name,
    })
  
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PersonScreen</Text>
      <Text> { JSON.stringify(params, null, 4) } </Text>
    </View>
  )
}