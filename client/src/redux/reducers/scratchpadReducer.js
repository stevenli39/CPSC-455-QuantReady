
const initialState = {
    value: '',
    position: { x: 20, y: 400 }
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
      case 'scratchpad/clearContent':
        return {
          ...state,
          value: '',
        };
      default:
        return state;
    }
  };
  
  export default scratchpadReducer;
  