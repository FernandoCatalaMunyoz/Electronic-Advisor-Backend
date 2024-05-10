import { Club } from "../../Models/Club";
import { AppDataSource } from "../db";

export const clubSeedDatabase = async () => {
  await AppDataSource.initialize();
  try {
    const club = new Club();
    club.name = "Pacha";
    club.address = "Ibiza";
    club.link = "https://www.pacha.com/";
    await club.save();

    const club2 = new Club();
    club2.name = "Amnesia";
    club2.address = "Ibiza";
    club2.link = "https://www.amnesia.es/";
    await club2.save();

    const club3 = new Club();
    club3.name = "Berghain";
    club3.address = "Berlin";
    club3.link = "https://berghain.de/";
    await club3.save();

    const club4 = new Club();
    club4.name = "Fabric";
    club4.address = "London";
    club4.link = "https://www.fabriclondon.com/";
    await club4.save();

    const club5 = new Club();
    club5.name = "Space";
    club5.address = "Ibiza";
    club5.link = "https://www.spaceibiza.com/";
    await club5.save();

    const club6 = new Club();
    club6.name = "DC10";
    club6.address = "Ibiza";
    club6.link = "https://www.dc10ibiza.com/";
    await club6.save();

    const club7 = new Club();
    club7.name = "Printworks";
    club7.address = "London";
    club7.link = "https://www.printworkslondon.co.uk/";
    await club7.save();

    const club8 = new Club();
    club8.name = "Barraca";
    club8.address = "Valencia";
    club8.link = "https://www.barraca.net/";
    await club8.save();

    const club9 = new Club();
    club9.name = "Spook";
    club9.address = "Valencia";
    club9.link = "https://www.spookclub.es/";
    await club9.save();

    const club10 = new Club();
    club10.name = "Privilege";
    club10.address = "Ibiza";
    club10.link = "https://www.privilegeibiza.com/";
    await club10.save();

    const club11 = new Club();
    club11.name = "Ushuaïa";
    club11.address = "Ibiza";
    club11.link = "https://www.theushuaiaexperience.com/";
    await club11.save();

    const club12 = new Club();
    club12.name = "KitKat";
    club12.address = "Berlin";
    club12.link = "https://www.kitkatclub.org/";
    await club12.save();

    const club13 = new Club();
    club13.name = "Watergate";
    club13.address = "Berlin";
    club13.link = "https://www.water-gate.de/";
    await club13.save();
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
