import auth from '../auth';
export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED =  'PROFILE_EDITED'


export function fetchProfile(){
let header = new Headers(auth)
    return (dispatch) =>{
        return fetch('https://api.github.com/users/Ndife',{
            method:'GET',
            header: header
          })
          .then(res => res.json())
          .then(json => {
            dispatch(loadProfile(json));
          })
          .catch(err => console.log(err))
  } 
  
}

export function saveProfile(profile){
    let header = new Headers(auth)
        return (dispatch) =>{
            return fetch('https://api.github.com/user',{
                method:'PATCH',
                header: header,
                body: JSON.stringify(profile)
              })
              .then(res => res.json())
              .then(json => {
                dispatch(loadProfile(json));
              })
              .catch(err => console.log(err))
      } 
      
    }


export function loadProfile(result){
    return {
        type: PROFILE_FETCHED,
        payload: result
    }
}

