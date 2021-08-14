
export interface DataStatic {
    src?:string,
    alt?:string,
    title?:string,
    subTitle?:string,
    description?:string
    subTitle2?:string
    }

     export const dataTabs :Array<DataStatic> = [
        {
        src: "https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/tab_1.jpg",
        alt: "some text",
         title: "APARTMENT TYPE",
        subTitle: "45m2 / ",
        subTitle2: "South-East",
         description: "Leverage agile frameworks to provide a robust synopsis for high level overviews to corporate strategy foster.",
    },
        {
        src: "https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/tab_2.jpg",
        alt: "some text",
         title: "APARTMENT TYPE",
        subTitle: "50m2 / ",
        subTitle2: "South-East",
         description: "Leverage agile frameworks to provide a robust synopsis for high level overviews to corporate strategy foster.",
    },
        {
        src: "https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/tab_3.jpg",
        alt: "some text",
         title: "APARTMENT TYPE",
        subTitle: "88m2 / ",
        subTitle2: "South-East",
         description: "Leverage agile frameworks to provide a robust synopsis for high level overviews to corporate strategy foster.",
    },

];

export const reverseArr = dataTabs.reverse();
