# Outputs the reading time

# Read this in “about 4 minutes”
# Put into your _plugins dir in your Jekyll site
# Usage: Read this in about {{ page.content | reading_time }}

module ReadingTimeFilter
	def reading_time( input )
		words_per_minute = 180

		words = input.split.size;
		minutes = ( words / words_per_minute ).floor
		minutes_label = minutes === 1 ? " minuto" : " minutos"
		minutes > 0 ? "alrededor de #{minutes} #{minutes_label}" : "menos de 1 minuto"
	end
end

Liquid::Template.register_filter(ReadingTimeFilter)