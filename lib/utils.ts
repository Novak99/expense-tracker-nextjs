export function addCommas(num: number): string {
return num
.toFixed(2)
.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
.replace('.', '|').replace(',', '.').replace('|', ',');
}


export async function getCurrencies(): Promise<Record<string, number> | undefined> {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/4481ed6e3a95d83d74bcd566/latest/USD`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        if (!data.conversion_rates) {
            throw new Error("No conversion rates found")
        }
        return data.conversion_rates;
    } catch (error) {
        console.error('Error fetching currencies', error)
        return undefined;
    }
}

export function fromRsdMultiplier(currency: string) {
    switch (currency) {
        case 'RSD':
            return 1
        case 'USD':
            return 0.0093
        case 'EUR':
            return 0.0085
        case 'GBP':
            return 0.0072
        default:
            return 1
    }
}

export function toRsdMultiplier(currency: string) {
    switch (currency) {
        case 'RSD':
            return 1
        case 'USD':
            return 1.0 / 0.0093
        case 'EUR':
            return 1.0 / 0.0085
        case 'GBP':
            return 1.0 / 0.0072
        default:
            return 1
    }
}

export function convertAmountToRsd(amount: string, currency: string): string {
    return (Number(amount) * toRsdMultiplier(currency)).toFixed(2)
}