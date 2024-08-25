import React, { useState } from 'react';
import {
  View,
  Dimensions
} from 'react-native';
import { DraggableGrid } from 'react-native-draggable-grid';

const baseWidth = Dimensions.get("window").width;
const pm = (number) => (number ? (parseFloat(number) / 320) * baseWidth : 0);

const Component = ({ children, bindData, numColumns, onDragStart, onDragRelease, onDragging, containerStyle, itemHeight }) => {
  const [data, setData] = useState(bindData)

  function render_item(item, index) {
    return (
      <View
        key={item.key}
      >
        { children[index] }
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <DraggableGrid
        numColumns={numColumns}
        renderItem={render_item}
        data={data}
        itemHeight={pm(itemHeight)}
        onDragStart={
          (data) => {
            onDragStart && onDragStart(data)
          }
        }
        onDragging={
          (PanResponderGestureState) => {
            onDragging && onDragging(PanResponderGestureState)
          }
        }
        onDragRelease={(data) => {
          setData(data)
          onDragRelease && onDragRelease(data)
        }}
      />
    </View>
  )
}

export default Component