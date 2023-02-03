import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { StackProps } from '../models/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams {
//   id: number,
//   name: string,
//   lastName: string,
//   age: number,
//   skills: string[]
// }

export const PersonScreen = ({ route: {params}, navigation: {setOptions} }: StackProps) => {

  const { setUsername } = useContext( AuthContext )

  //* Fast way to get TS autocompletion
  // const params = route.params as RouteParams

  //* Tip: Use Multiple Effects to Separate Concerns
  useEffect(() => {
    setOptions({
      //* < ! > removes null and undefined from the type of an expression
      // title: params!.name
      title: params.name,
    })

    setUsername(params.name)
  
  }, [])

  useEffect(() => { setUsername(params.name) }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PersonScreen</Text>
      <Text> { JSON.stringify(params, null, 4) } </Text>
    </View>
  )
}