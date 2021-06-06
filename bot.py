import discord
import requests
import json

from weather import *



token = 'ODQzODU0NTc4OTUyMzA2NzI4.YKJ60Q.axWfK-TbaiUs9xF45BiLTwtC0rk'
api_key = '24e72e75be3ef7a02a962a60e7e13699'
client = discord.Client()
command_prefix = 'w.'


@client.event
async def on_ready():
    await client.change_presence(activity=discord.Activity(type=discord.ActivityType.listening, name='w.[location]'))

@client.event
async def on_message(message):
    if message.author != client.user and message.content.startswith(command_prefix):
        if len(message.content.replace(command_prefix, '')) >= 1:
            location = message.content.replace(command_prefix, '').lower()
            url = f'http://api.openweathermap.org/data/2.5/weather?q={location}&appid={"24e72e75be3ef7a02a962a60e7e13699"}&units=imperial'
            try:
                data = parse_data(json.loads(requests.get(url).content)['main'])
                await message.channel.send(embed=weather_message(data, location))
            except KeyError:
                await message.channel.send(embed=error_message(location))

client.run("ODQzODU0NTc4OTUyMzA2NzI4.YKJ60Q.axWfK-TbaiUs9xF45BiLTwtC0rk")
