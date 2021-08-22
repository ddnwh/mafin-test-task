export type PropsType = {
    currentPage: number;
    totalPages: number;
    changePage: (page:number)=>void;
};