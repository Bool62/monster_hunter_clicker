import requests
from bs4 import BeautifulSoup
import re

def extract_numeric_value(text):
    numeric_text = ''.join(filter(str.isdigit, text))
    numeric_value = int(numeric_text)
    return numeric_value

def extract_quantity(td_text):
    match = re.search(r'(\d+)x', td_text)
    if match:
        return match.group(1)
    else:
        return None

def extract_item_id(href):
    match = re.search(r'item/normal_(\d+)\.html', href)
    if match:
        return match.group(1)
    else:
        return None

def format_output(data):
    for itemId, itemValue in data.items():
        #print(itemId, itemValue)
        print('new MonsterReward(ItemDATA.ITEM_'+str(int(itemId)),', [')
        
        for rankId, rankValue in itemValue.items():
            rank = 'Rank.LOW'
            if rankId == 'hr' :
                 rank = 'Rank.HIGH'
            if rankId == 'mr' :
                 rank = 'Rank.MASTER'
            print('new MonsterRewardCondition(',rank,',', round(int(rankValue['quantity'])),',', round(int(rankValue['percent'])),'),')
                
        print(']),')

              

##        new MonsterReward(ItemDATA.ITEM_363, [
##            new MonsterRewardCondition(Rank.LOW, 1, 30),
##            new MonsterRewardCondition(Rank.HIGH, 1, 30),
##            new MonsterRewardCondition(Rank.MASTER, 1, 35),
##        ]),

def gestion_section(reward_section, data, rank):
    tables = reward_section.find_all('table')

    for table in tables:
        lignes = table.find_all('tr')

        for ligne in lignes:
            lignesTD = ligne.find_all('td')

            if len(lignesTD) == 2:
                print(extract_quantity(lignesTD[0].text))
                print(extract_numeric_value(lignesTD[1].text))
                a_element = lignesTD[0].find('a')

                if a_element:
                    href = a_element.get('href')
                    identifiant = extract_item_id(href)
                    print(identifiant)
                    if identifiant in data:
                        if rank in data[identifiant]:
                            data[identifiant][rank] = {
                                'quantity': (int(data[identifiant][rank]['quantity']) + int(extract_quantity(lignesTD[0].text))) / 2,
                                'percent': (int(data[identifiant][rank]['percent']) + int(extract_numeric_value(lignesTD[1].text))) / 2
                            }
                        else:
                            data[identifiant][rank] = {
                                'quantity': extract_quantity(lignesTD[0].text),
                                'percent': extract_numeric_value(lignesTD[1].text)
                            }
                    else:
                        data[identifiant] = {rank: {'quantity': extract_quantity(lignesTD[0].text),
                                                    'percent': extract_numeric_value(lignesTD[1].text)}}

            if len(lignesTD) == 3:
                print(extract_quantity(lignesTD[1].text))
                print(extract_numeric_value(lignesTD[2].text))
                a_element = lignesTD[1].find('a')

                if a_element:
                    href = a_element.get('href')
                    identifiant = extract_item_id(href)
                    print(identifiant)
                    if identifiant in data:
                        if rank in data[identifiant]:
                            data[identifiant][rank] = {
                                'quantity': (int(data[identifiant][rank]['quantity']) + int(extract_quantity(lignesTD[1].text))) / 2,
                                'percent': (int(data[identifiant][rank]['percent']) + int(extract_numeric_value(lignesTD[2].text))) / 2
                            }
                        else:
                            data[identifiant][rank] = {
                                'quantity': extract_quantity(lignesTD[1].text),
                                'percent': extract_numeric_value(lignesTD[2].text)
                            }
                    else:
                        data[identifiant] = {rank: {'quantity': extract_quantity(lignesTD[1].text),
                                                    'percent': extract_numeric_value(lignesTD[2].text)}}

url = "https://mhrise.mhrice.info/monster/001_00.html"
data = {}

try:
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        reward_section_lr = soup.find(id='s-reward-lr')
        if reward_section_lr:
            print("Section low")
            gestion_section(reward_section_lr, data, 'lr')
        else:
            print("Section low introuvable.")

        reward_section_hr = soup.find(id='s-reward-hr')
        if reward_section_hr:
            print("Section high")
            gestion_section(reward_section_hr, data, 'hr')
        else:
            print("Section high introuvable.")

        reward_section_mr = soup.find(id='s-reward-mr')
        if reward_section_mr:
            print("Section master")
            gestion_section(reward_section_mr, data, 'mr')
        else:
            print("Section master introuvable.")

        format_output(data)

    else:
        print(f"Erreur de requête HTTP: {response.status_code}")

except requests.exceptions.RequestException as e:
    print(f"Erreur lors de la requête HTTP : {e}")
