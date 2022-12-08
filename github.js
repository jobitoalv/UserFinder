class Github {
    constructor() {
      this.client_id = 'd2fcf10b936690a8c741';
      this.client_secret = 'd35ee4b939ec75b0ca0949189803ac3fe8f8352c';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
  
      return {
        profile
      }
    }
  }