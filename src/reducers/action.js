
/*
 * action types
 */


/*
 * action creators
 */

/**
 * handle click corridor
 * @param {object} res
 * @return {object} action - "clickCorridor" type and res
 */
export function clickCorridor(res) {
  return {
    type: "clickCorridor",
    res
  }
}

/**
 * handle change map
 * @param {object} res
 * @return {object} action - "changeMap" type and res
 */
export function changeMap(res) {
  return {
    type: "changeMap",
    res
  }
}

/**
 * handle save scenario
 * @param {object} res
 * @return {object} action - "saveScenario" type and res
 */
export function saveScenario(res) {
  return {
    type: "saveScenario",
    res
  }
}


export function changeTimeFilter(res) {
  return {
    type: "changeTimeFilter",
    res
  }
}

export function changeMode(res) {
  return {
    type: "changeMode",
    res
  }
}

export function selectScenario(res) {
  return {
    type: "selectScenario",
    res
  }
}

export function changeGridNumber(res) {
  return {
    type: "changeGridNumber",
    res
  }
}

export function fireUpdate(res) {
  return {
    type: "fireUpdate",
    res
  }
}

export function isCompare(res) {
  return {
    type: "isCompare",
    res
  }
}


export function doneOneScenario(res) {
  return {
    type: "doneOneScenario",
    res
  }
}


export function doneCompareScenario(res) {
  return {
    type: "doneCompareScenario",
    res
  }
}


export function doneExitSurvey(res) {
  return {
    type: "doneExitSurvey",
    res
  }
}
