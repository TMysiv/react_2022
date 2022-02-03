// 1) создать интерфейс на основе этого объекта:
export interface ISpace {
    mission_name: string,
    launch_date_local: string,
    launch_site: ILaunch_site,
    links:ILink,
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: ICores[]
        },
        second_stage: {
            payloads: IPay[]
        }
    }
}

interface ILink {
    article_link: null,
    video_link: string
}
interface IPay{
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}
interface ICore{
    reuse_count: number,
    status: string
}
interface ILaunch_site{
    site_name_long: string
}
interface ICores{
    flight: number,
    core: ICore
}

