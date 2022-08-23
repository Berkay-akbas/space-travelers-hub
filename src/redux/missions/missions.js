const ADDED_MISSIONS = 'space-travelers-hub/missions/ADDED_MISSION';

const initialState = {
  missions: [],
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_MISSIONS:
      return {
        ...state, missions: [...state.missions, ...action.payload],
      };
    default:
      return state;
  }
};

export const addMissions = (missions) => ({
  type: ADDED_MISSIONS,
  payload: missions,
});

export const fetchMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  dispatch(addMissions(missions));
};

export default missionReducer;
