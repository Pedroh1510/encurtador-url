import { Entity, Column, PrimaryColumn } from 'typeorm'

import { Url } from './../Url'

@Entity()
export class Urls implements Url {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    url: string;

    @Column()
    smallUrl: string

    @Column()
    createAt:string

    @Column()
    expire:string
}
