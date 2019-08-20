/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Switch,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SwipableRating from 'react-native-swipeable-rating';

const App = () => {
  const w = Dimensions.get('screen').width;
  const [maxRating, setMaxRating] = useState(5);
  const [rating, setRating] = useState(maxRating / 2);
  const [gap, setGap] = useState(2);
  const [size, setSize] = useState(w * 0.1);
  const [allowHalves, setAllowHalves] = useState(true);

  const margin = 24;
  const getOffset = () => {
    return w / 2 - ((size + gap) * maxRating) / 2;
  }
  console.log(getOffset());
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={{ margin: margin, alignItems: 'center', flex: 1 }}>
              <SwipableRating
                color={'#2196f3'}
                emptyColor={'silver'}
                gap={gap}
                size={size}
                xOffset={getOffset()}
                allowHalves={allowHalves}
                minRating={allowHalves ? 0.5 : 1}
                maxRating={maxRating}
                rating={rating}
                onPress={setRating}
              />
              <View style={styles.settings}>
                <Text style={styles.heading}>Max Rating (# of stars)</Text>
                <View style={styles.optionSet}>
                  <Button value={3} onPress={() => setMaxRating(3)} getValue={maxRating}/>
                  <Button value={5} onPress={() => setMaxRating(5)} getValue={maxRating}/>
                  <Button value={10} onPress={() => setMaxRating(10)} getValue={maxRating}/>
                </View>
                <Text style={styles.heading}>Star size</Text>
                <View style={styles.optionSet}>
                  <Button value={24} onPress={() => setSize(24)} getValue={size}/>
                  <Button value={36} onPress={() => setSize(36)} getValue={size}/>
                  <Button value={48} onPress={() => setSize(48)} getValue={size}/>
                </View>
                <Text style={styles.heading}>Gap size</Text>
                <View style={styles.optionSet}>
                  <Button value={0} onPress={() => setGap(0)} getValue={gap}/>
                  <Button value={4} onPress={() => setGap(4)} getValue={gap}/>
                  <Button value={8} onPress={() => setGap(8)} getValue={gap}/>
                  <Button value={12} onPress={() => setGap(12)} getValue={gap}/>
                </View>
                                <Text style={styles.heading}>Allow half star ratings</Text>
                <View style={styles.optionSet}>

                      <Switch trackColor={'crimson'} onValueChange={v => setAllowHalves(v)} value={allowHalves} />
</View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};
const Button = ({onPress, value, getValue}) => (
<TouchableOpacity onPress={onPress} style={[styles.button, getValue === value && {backgroundColor: 'silver' }]}>
  <Text style={styles.buttonText}>{value}</Text>
</TouchableOpacity>
)
const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 5,
    flex: 1,
  },
  button: {
    padding: 8,
    backgroundColor: Colors.lighter,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16
  },
  settings: {
    paddingVertical: 20,
  },
  optionSet: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
