import { verticalScale, scale } from '../../../utils/scaling'
import { Dimensions, StyleSheet } from 'react-native'
import { alignment } from '../../../utils/alignment'
import { theme } from '../../../utils/themeColors'
const { height } = Dimensions.get('window')

const styles = (props = null) =>
  StyleSheet.create({
    mainContainer: {
      gap: 20
    },
    topbrandsSec: {
      gap: 5,
      ...alignment.PLmedium
    },
    topbrandsHeading:{
      ...alignment.PRmedium

    },
    brandImg: {
      width: '100%',
      // aspectRatio: 18/8,
      height: scale(70),
      objectFit: 'cover',
      borderRadius: 8,
    },
    topbrandsContainer: {
      flexGrow: 1,
      width: scale(90),
      marginTop: scale(7),
      ...alignment.MRmedium
    },
    brandImgContainer: {
      backgroundColor: '#F3F4F6',
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 8
      // padding:scale(8),
    },
    brandName: {
      marginTop: scale(5),
      marginBottom: scale(2)
    },
    margin: {
      ...alignment.MLmedium,
      ...alignment.MBmedium
    },
    screenBackground: {
      backgroundColor: props != null ? props.themeBackground : '#FFF',
      ...alignment.PBlarge
    },
    placeHolderFadeColor: {
      backgroundColor: props != null ? props.fontSecondColor : '#B8B8B8'
    },
    brandsPlaceHolderContainer: {
      backgroundColor: props != null ? props.cartContainer : '#B8B8B8',
      borderRadius: scale(3),
      paddingHorizontal: scale(20)
    },
    height80: {
      height: scale(80)
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      ...alignment.MRmedium,
      marginBottom: scale(8),
    },
    seeAllBtn: {
      backgroundColor: props != null ? props.lightGreen : '#F3FFEE',
      borderRadius: 4,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      
    }
  })

export default styles
