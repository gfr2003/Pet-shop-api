import { Request, Response } from 'express'

export const home = (req: Request, res: Response) => {
    //res.render('pages/page')

    res.send('home no controller')
}
export const dogs = (req: Request, res: Response) => {
    //res.render('pages/page')
    res.send('dogs no controller')
}
export const cats = (req: Request, res: Response) => {
    res.send('cats no controller')
    //res.render('pages/page')
}
export const fishes = (req: Request, res: Response) => {
    res.send('fishes no controller')
    //res.render('pages/page')
}
