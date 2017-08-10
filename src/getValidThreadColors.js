"use strict";

module.exports = function(defaultFuncs, api, ctx) {
  return function getValidThreadColors() {
    // Currently the only colors that can be passed to changeThreadColor(); may change if Facebook adds more
    return ["#44bec7", "#ffc300", "#fa3c4c", "#d696bb", "#6699cc", "#13cf13", "#ff7e29", "#e68585", "#7646ff", "#20cef5", "#67b868", "#d4a88c", "#ff5ca1", "#a695c7"];
  };
};
