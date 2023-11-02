import axios from 'axios'

export default class Service{

    _linkDb = 'https://rickandmortyapi.com/api/'

    async fetchCharactersData (page: number) {
        try{
            const response = await axios.get(`${this._linkDb}character/?page=${page}`);
            return response.data;
        }
        catch(error){
            throw new Error('Failed to fetch data');
        }
      };

    
    async getCharacterById(id: number): Promise<Character> {
        try{
            const res = await axios.get(`${this._linkDb}/character/${id}`);
            return res.data;
        }
        catch(error){
            throw new Error('Failed to fetch data');
        }
    };

};



        