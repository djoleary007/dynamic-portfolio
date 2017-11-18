import {observable, action, computed} from 'mobx';

class AboutMeStore{
  @observable timePeriodId = '';
  @observable aboutInfo = [];
  @observable loading = true;
  @observable headshot = ''

  @action loadAbout(){
    this.loading = true;
    return fetch('/api/about')
    .then(response => {
      return response.json();
    })
    .then(results => {
      this.aboutInfo = results.info;
      this.loading = false
    })
    .catch(error => console.log(error))
    }

  @action loadHeadshot(){
    return fetch('/api/photos/headshot')
    .then(response => {
      console.log(response.blob());
      console.log(response);
      
      return response.blob();
    })
    .then(result => {
      let objectURL = URL.createObjectURL(result);
      this.headshot = objectURL;
    })
    .catch(error => console.log(error))
  }

    @action loadNewTimePeriod(id){
      this.timePeriodId = id;
    }


    @computed get activeTimePeriod(){
      return this.aboutInfo.filter((info) => (
        info._id === this.timePeriodId.toString()
      ));
    }
}




export default AboutMeStore;
