const ADDED_MISSIONS = 'space-travelers-hub/missions/ADDED_MISSION';
const JOINED_MISSION = 'space-travelers-hub/missions/JOINED_MISSION';
const LEFT_MISSION = 'space-travelers-hub/missions/LEFT_MISSION';

const initialState = {
  missions: [],
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_MISSIONS:
      return {
        ...state, missions: [...state.missions, ...action.payload],
      };
    case JOINED_MISSION: {
      const missionsCopy = [...state.missions];

      const index = missionsCopy.findIndex((object) => object.mission_id === action.payload);
      missionsCopy[index].reserved = true;
      return {
        ...state,
        missions: missionsCopy,
      };
    }
    case LEFT_MISSION: {
      const missionsCopy = [...state.missions];

      const index = missionsCopy.findIndex((object) => object.mission_id === action.payload);
      missionsCopy[index].reserved = false;
      return {
        ...state,
        missions: missionsCopy,
      };
    }
    default:
      return state;
  }
};

export const addMissions = (missions) => ({
  type: ADDED_MISSIONS,
  payload: missions,
});

export const leaveMissions = (id) => ({
  type: LEFT_MISSION,
  payload: id,
});

export const joinMissions = (id) => ({
  type: JOINED_MISSION,
  payload: id,
});

export const fetchMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  dispatch(addMissions(missions));
};

export default missionReducer;
