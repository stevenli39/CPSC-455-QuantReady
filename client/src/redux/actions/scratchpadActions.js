export const updateContent = content => ({
    type: 'scratchpad/updateContent',
    payload: content
  });
  
  export const updatePosition = position => ({
    type: 'scratchpad/updatePosition',
    payload: position
  });

  export const clearContent = position => ({
    type: 'scratchpad/clearContent',
  });
  