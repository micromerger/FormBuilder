/* tslint:disable */

declare var Object: any;
export interface UserinfoInterface {
  "name"?: string;
  "cnic"?: string;
  "id"?: number;
}

export class Userinfo implements UserinfoInterface {
  "name": string;
  "cnic": string;
  "id": number;
  constructor(data?: UserinfoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Userinfo`.
   */
  public static getModelName() {
    return "Userinfo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Userinfo for dynamic purposes.
  **/
  public static factory(data: UserinfoInterface): Userinfo{
    return new Userinfo(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Userinfo',
      plural: 'Userinfos',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "cnic": {
          name: 'cnic',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
