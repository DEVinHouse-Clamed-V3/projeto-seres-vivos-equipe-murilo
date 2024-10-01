import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      width: '100%',
      height: '100%',
      paddingVertical: 20,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    card_head:
    {
      backgroundColor: 'orange',
      height: "10%",
      alignItems: 'center',
      padding: 6,
      borderTopEndRadius: 15,
      borderTopStartRadius: 15,
    },
    card_body: 
    {
      backgroundColor: 'white',
      width: 300,
      height: 300,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'orange',
      gap: 10,
    },
    card_body_items:
    {
      paddingTop: 20,
      gap: 20,
      alignItems: 'center',
    },
    page_body:
    {
        flex: 1,
        backgroundColor: '#f0f0f0',
        height: "100%",
        width: "100%",
    },
    page_header:
    {

      backgroundColor: '#ffcf3d',
      height: "10%",
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      textAlign: 'center',
    },
    test:
    {
      backgroundColor: '#ffcf3d',
      height: "10%",
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      textAlign: 'center',
    }

  });