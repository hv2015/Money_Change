num = input('Give me a number: ')

try:
    num_int = int(num)
except ValueError:
    print("Invalid number")

def vueltas(cantidad):
	euros = [500, 200, 100, 50, 20, 10, 5, 2, 1]
	centimos = [50, 20, 10, 5, 2, 1]
	  
	dev_euros = [0, 0, 0, 0, 0, 0, 0, 0, 0]
	dev_centimos = [0, 0, 0, 0, 0, 0]
	  
	cantidad_uso = cantidad;

	for i in range(1, len(euros)):
		if cantidad_uso >= euros[i]:
			while True:
				cantidad_uso = cantidad_uso - euros[i]
				dev_euros[i] += 1
				if cantidad_uso >= euros[i]:
					continue
				else:
					break
			
	print " ".join(dev_euros)

	return 0