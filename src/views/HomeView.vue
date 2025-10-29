<template>
  <main class="max-w-4xl m-auto flex flex-col gap-4">
    <h1>Skript</h1>
    <p>
      is a scripting plugin for Paper. The syntax of Skript is close to English, and allows you to
      modify Minecraft server behavior without any prior programming knowledge.
    </p>
    <p>
      This is Skript's documentation. Here, you will find all syntax that you can use, along with
      examples. If you want to get started, we have an ever-expanding list of tutorials to get you
      started.
    </p>
    <!-- Code Section -->
    <highlightjs
      language="skript"
      code='command /sethome:
	permission: skript.home # Permission required for this command
	description: Set your home # Description of this command
	executable by: players # Console wont be able to run this command
	trigger: # The actual trigger/code that will run when someone do /sethome
		# Set a unique variable to senders location
		set {home::%uuid of player%} to location of player
		# Send a message to the sender
		message "Set your home to <grey>%location of player%<reset>"

command /home:
	permission: skript.home
	description: Teleport yourself to your home
	trigger:
		# Check if that variable we used in /sethome has been set (in other words, if player ever ran /sethome)
		if {home::%uuid of player%} is not set:
			message "You have not set your home yet!"
			stop trigger # stop the code here, lines below wont run
		# Teleport the player to their home
		teleport player to {home::%uuid of player%}
		send "&aYou have been teleported."'
    />
  </main>
</template>
