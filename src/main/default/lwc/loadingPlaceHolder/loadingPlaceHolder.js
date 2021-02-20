import { LightningElement,api } from 'lwc';

export default class LoadingPlaceHolder extends LightningElement {
  @api
  rowNumber
  get rows() {
    const number = this.rowNumber
    var row = {}
    var rows = []
    for(let i = 0; i < number; i++) {
      row.id = i
      rows.push(row)
    }
    return rows
  }
}