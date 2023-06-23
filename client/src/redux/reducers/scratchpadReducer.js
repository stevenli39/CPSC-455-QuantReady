
const initialState = {
    value: '',
    position: { x: 0, y: 0 }
  };
  
  const scratchpadReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'scratchpad/updateContent':
        return {
          ...state,
          value: action.payload,
        };
      case 'scratchpad/updatePosition':
        return {
          ...state,
          position: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default scratchpadReducer;
  