import { StyleSheet, Dimensions } from 'react-native';
import { scale } from '../../utils/scaling';
import { alignment } from '../../utils/alignment';
const { height } = Dimensions.get('window')

const CONTAINER_HEIGHT = Math.floor(scale(height / 5)*1.4)
const BACKDROP_HEIGHT = Math.floor(scale(height - CONTAINER_HEIGHT))

const styles = (props = null) =>
  StyleSheet.create({
    backdrop: {
      height: BACKDROP_HEIGHT
  },
  layout: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
    modalContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: CONTAINER_HEIGHT,
      backgroundColor: props !== null ? props.themeBackground : '#FFF',
      borderTopLeftRadius: scale(20),
      borderTopRightRadius: scale(20),
      paddingHorizontal: scale(20),
      paddingTop: scale(20),
      paddingBottom: scale(10),
      borderWidth: scale(1),
      borderColor: props !== null ? props.gray200 : '#E5E7EB',
      flex: 1,
      justifyContent: 'center',
    },
    modalView: {
      width: '100%',
      backgroundColor: props !== null ? props.themeBackground : 'white',
      paddingHorizontal: scale(20),
      paddingBottom: scale(10),
      borderTopLeftRadius: scale(20),
      borderTopRightRadius: scale(20),
      borderWidth: scale(1),
      borderColor: props !== null ? props.color10 : 'white'
    },
    modalHead: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      ...alignment.PBsmall
    },
    btn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      height: scale(40),
      borderRadius: 40,
      marginVertical: scale(5),
      backgroundColor: props !== null ? props.transparent : '#00000000',
      borderWidth: 1,
    },
    btnCancel: {
      borderColor: props !== null ? props.black : 'black'
    },
    btnDelete: {
      borderColor: props !== null ? props.red600 : '#DC2626'
    },
    btnEdit: {
      borderColor: props !== null ? props.linkColor : '#0EA5E9'
    }
  });

export default styles;