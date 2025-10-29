import { LightningElement } from 'lwc';
import deletePost from '@salesforce/apex/deleteApi.deletePost'; 

export default class Delete extends LightningElement {
    result;
    handleClick() {
        // Add you delete logic here
        deletePost().then(data=>{
        this.result=data;
        }).catch(err=>{
            this.result=err;
        })
    }

}