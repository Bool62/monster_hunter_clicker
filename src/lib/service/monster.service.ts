import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Monster, MonsterSpecies, MonsterType } from "../model/monster.model";
import { ElementType } from "../model/element.model";
import { enumFromStringValue } from "./tool.service";
import { Rank } from "../model/rank.model";

@Injectable({ providedIn: "root" })
export class MonsterService {
  constructor(private httpClient: HttpClient) {}

  getMonsters() {
    this.httpClient.get("https://mhw-db.com/monsters").subscribe((items) => {
      let output = '';
      //console.log(items);

      (<any[]>items).forEach((item) => {
        const typeMapped: MonsterType | undefined = enumFromStringValue(
          MonsterType,
          item.type
        );

        const specieMapped: MonsterSpecies | undefined = enumFromStringValue(
          MonsterSpecies,
          item.species
        );

        const resistancesMapped: ElementType[] = [];
        (<any[]>item.resistances).forEach((resistance) => {
          const elementMapped: ElementType | undefined = enumFromStringValue(
            ElementType,
            resistance.element
          );
          if (elementMapped) {
            resistancesMapped.push(elementMapped);
          }
        });

        const weaknessesMapped: ElementType[] = [];
        (<any[]>item.weaknesses).forEach((weakness) => {
          const elementMapped: ElementType | undefined = enumFromStringValue(
            ElementType,
            weakness.element
          );
          if (elementMapped) {
            weaknessesMapped.push(elementMapped);
          }
        });

        if (typeMapped && specieMapped) {
          const monster = new Monster(
            item.id,
            item.name,
            item.description,
            typeMapped,
            specieMapped,
            resistancesMapped,
            weaknessesMapped,
            [], // TODO reward from other referential,
            100, // TODO health from other referential,
            100, // TODO health from other referential,
            100, // TODO health from other referential,
            Rank.LOW,
            ""
          );
          //console.log(monster);
          output = output + '\n const monster_' + item.id + `= new Monster( ${item.id}, "${item.name}", "${item.description}",
            "${typeMapped}", "${specieMapped}", [${resistancesMapped}], [${weaknessesMapped}],
            [], // TODO reward from other referential, 
            100, // TODO health from other referential,
            100, // TODO health from other referential,
            100, // TODO health from other referential,
            Rank.LOW,
            "");            
            `
        }
      });
      console.log(output);
    });
  }
}
