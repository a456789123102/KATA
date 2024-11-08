class PaginationHelper {
    constructor(collection, itemsPerPage) {
      this.collection = collection; // อาร์เรย์ข้อมูลทั้งหมด
      this.itemsPerPage = itemsPerPage; // จำนวนข้อมูลต่อหน้า
    }
    itemCount() {
      return this.collection.length;
    }
    pageCount() {
      return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        if(pageIndex < 0) return -1;
      let res = this.collection.length - (this.itemsPerPage * pageIndex) 
      return Math.min(this.itemsPerPage, res > 0? res : -1);
    }
    pageIndex(itemIndex) {
        const totalItems = this.collection.length;
        if (itemIndex < 0 || itemIndex >= totalItems) {
            return -1; 
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
  }

let helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10);
console.log(helper.itemCount());
console.log(helper.pageCount());
console.log(helper.pageItemCount(1));
console.log(helper.pageIndex(22));